
$ApiKey = "AIzaSyBw31ChPxoAJD2Cij-3NiID8XjYX_p39J4"


function Process-NearbyResult
{
param($Result)


	$PlaceDetailsUrl = "https://maps.googleapis.com/maps/api/place/details/json?placeid={0}&key={1}" -f ($Result.place_id), $ApiKey
	$PlaceDetailsResult = Invoke-RestMethod $PlaceDetailsUrl

	Write-Host ("-- Processing place " + $Result.place_id + " - " + $PlaceDetailsResult.result.name)
	
	$PlaceResult = New-Object PSObject
	$PlaceResult | Add-Member -MemberType NoteProperty -Name Id -Value $Result.place_id
	$PlaceResult | Add-Member -MemberType NoteProperty -Name Name -Value $PlaceDetailsResult.result.name
	$PlaceResult | Add-Member -MemberType NoteProperty -Name Address -Value $PlaceDetailsResult.result.formatted_address
	$PlaceResult | Add-Member -MemberType NoteProperty -Name PhoneNumber -Value $PlaceDetailsResult.result.formatted_phone_number
	$PlaceResult | Add-Member -MemberType NoteProperty -Name Website -Value $PlaceDetailsResult.result.website
	$PlaceResult | Add-Member -MemberType NoteProperty -Name GoogleUrl -Value $PlaceDetailsResult.result.url
	
	if ($PlaceDetailsResult.result.types -ne $null)
		{ $PlaceResult | Add-Member -MemberType NoteProperty -Name Types -Value ([string]::Join(", ", $PlaceDetailsResult.result.types)) }
		
	if ($PlaceDetailsResult.result.geometry -ne $null)
	{
		$PlaceResult | Add-Member -MemberType NoteProperty -Name Latitude -Value $PlaceDetailsResult.result.geometry.location.lat
		$PlaceResult | Add-Member -MemberType NoteProperty -Name Longitude -Value $PlaceDetailsResult.result.geometry.location.lng
	}
	
	if ($PlaceDetailsResult.result.opening_hours -ne $null)
		{ $PlaceResult | Add-Member -MemberType NoteProperty -Name OpeningHours -Value ([string]::Join(" - ", $PlaceDetailsResult.result.opening_hours.weekday_text)) }
		
	return $PlaceResult
} 

function Search-Places
{
param($Latitude, $Longitude, $Radius, $PlaceType)


	$Results = @()
	$PageToken = ""

	while($true)
	{
		Write-Host ""
		Write-Host "Processing page $PageToken"
		$NearbySearchUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={0},{1}&radius={2}&type={3}&key={4}&pagetoken={5}" -f ($Latitude.ToString().Replace(",", ".")), ($Longitude.ToString().Replace(",", ".")), $Radius, $PlaceType, $ApiKey, $PageToken
		$NearbyResponse = Invoke-RestMethod $NearbySearchUrl
		
		$NearbyResponse.results | %{ $Results += (Process-NearbyResult -Result $_) }
		
		if ([string]::IsNullOrEmpty($NearbyResponse.next_page_token) -or ($PageToken -eq $NearbyResponse.next_page_token))
			{ break }
		
		$PageToken = $NearbyResponse.next_page_token
	}
	
	return $Results
}

function Find-Places
{
param($Latitude, $Longitude, $Radius, $OutputFile)

	$Bars = Search-Places -Latitude $Latitude -Longitude $Longitude -Radius $Radius -PlaceType "bar"
	$Restaurant = Search-Places -Latitude $Latitude -Longitude $Longitude -Radius $Radius -PlaceType "restaurant"

	$Places = @()
	$Bars | %{ $Places += $_ }
	$Restaurant | %{ $Places += $_ }

	
	$Data = $Places | Group-Object -Property Id | %{ $_.Group[0] }
	
	if ([IO.File]::Exists($OutputFile))
		{[IO.File]::Delete($OutputFile)}
	
	$Data | Export-Csv $OutputFile -NoClobber -NoTypeInformation -Delimiter ';'
}


$Latitude = 45.055049
$Longitude = 7.681031
$Radius = 500
$OutputFile = "C:\temp\bars.csv"

Search-Bars -Latitude $Latitude -Longitude $Longitude -Radius $Radius -OutputFile $OutputFile

