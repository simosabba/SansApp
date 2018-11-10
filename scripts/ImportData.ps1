
$global:SqlConnectionString = "Server=.\SQLEXPRESS;Initial Catalog=Monica;MultipleActiveResultSets=False;Integrated Security=True;"
$global:SqlConnection = New-Object System.Data.SqlClient.SqlConnection($SqlConnectionString)
$global:SqlConnection.Open()

function Txt
{
param($Value)
	return ("'" + $Value + "'")
}

function Delete-Table
{
param($Table)

	$SqlCommandText = "delete from [dbo].[" + $Table + "]"
	$DeleteCommand = New-Object System.Data.SqlClient.SqlCommand($SqlCommandText, $SqlConnection)
	$DeleteCommand.ExecuteNonQuery() | Out-Null
	$DeleteCommand.Dispose()
}

function Format-InsertQuery
{
param($Table, $ColumnNames, $ColumnValues)

	$SqlCommandText = "insert into [dbo].[" + $Table + "]"
	$SqlCommandText += "("
	$SqlCommandText += [string]::Join(",", $ColumnNames)
	$SqlCommandText += ")"
	$SqlCommandText += "VALUES"
	$SqlCommandText += "("
	$SqlCommandText += [string]::Join(",", $ColumnValues)
	$SqlCommandText += ")"
	return $SqlCommandText
}

#Common

Write-Output "Opening SQL connection"
Write-Output ""

#Activities

$activities = import-csv "C:\Users\Simone\Google Drive\Monica\data\attivita-commerciale\attivita_commerciali_geo_CAP.csv"
$SqlCommandText = "delete from [dbo].[Activities]"
$DeleteCommand = New-Object System.Data.SqlClient.SqlCommand($SqlCommandText, $SqlConnection)
$DeleteCommand.ExecuteNonQuery() | Out-Null
$DeleteCommand.Dispose()

#Movida Data
$movida_data = import-csv "C:\Users\Simone\Google Drive\Monica\data\noise\movida_noise_sansalvario__update.csv"
Delete-Table -Table "Movida_Noise_Data"

$queryona = ""
$index = 0
foreach ($record in $movida_data2)
{
	if ($record.date.Length -gt 16)
		{ $dt = [DateTime]::ParseExact($record.date, "yyyy-MM-dd HH:mm:ss", [System.Globalization.CultureInfo]::InvariantCulture) }
	else
		{ $dt = [DateTime]::ParseExact($record.date, "yyyy-MM-dd HH:mm", [System.Globalization.CultureInfo]::InvariantCulture) }

	$data = $dt.ToString("yyyy-MM-dd HH:mm:ss")
	$query = Format-InsertQuery -Table "Movida_Noise_Data" -ColumnNames @("date", "SLM", "dbA") -ColumnValues @((Txt($data)), (Txt($record.SLM)), $record.dbA)
	$queryona += $query + " GO" + [Environment]::NewLine
	$index++
	Write-Host ($index.ToString() + " / " + $movida_data2.length.ToString())
}

$Command = New-Object System.Data.SqlClient.SqlCommand($queryona, $SqlConnection)
$Command.ExecuteNonQuery() | Out-Null
$Command.Dispose()

#Crowd
Delete-Table -Table "Crowd"

$queryona = ""

$crowd_data = import-csv "C:\Users\Simone\Google Drive\Monica\data\crowd\presenze_sansalvario_19_250318.csv" -Delimiter ";"
$index = 0
foreach ($record in $crowd_data)
{
	$query = Format-InsertQuery -Table "Crowd" -ColumnNames @("Cluster", "data_da", "data_a", "numero_presenze", "layer_id", "area", "dettaglio") -ColumnValues @((Txt($record.Cluster)), (Txt($record.data_da)), (Txt($record.data_a)), ($record.numero_presenze), (Txt($record.layer_id)), (Txt($record.area)), (Txt($record.dettaglio)))
	$queryona += $query + " GO" + [Environment]::NewLine
	$index++
	Write-Host ($index.ToString() + " / " + $crowd_data.length.ToString())
}

$crowd_data = import-csv "C:\Users\Simone\Google Drive\Monica\data\crowd\presenze_sansalvario_04_100618.csv" -Delimiter ";"
$index = 0
foreach ($record in $crowd_data)
{
	$query = Format-InsertQuery -Table "Crowd" -ColumnNames @("Cluster", "data_da", "data_a", "numero_presenze", "layer_id", "area", "dettaglio") -ColumnValues @((Txt($record.Cluster)), (Txt($record.data_da)), (Txt($record.data_a)), ($record.numero_presenze), (Txt($record.layer_id)), (Txt($record.area)), (Txt($record.dettaglio)))
	$queryona += $query + " GO" + [Environment]::NewLine
	$index++
	Write-Host ($index.ToString() + " / " + $crowd_data.length.ToString())
}

$crowd_data = import-csv "C:\Users\Simone\Google Drive\Monica\data\crowd\presenze_sansalvario_09_151017.csv" -Delimiter ";"
$index = 0
foreach ($record in $crowd_data)
{
	$query = Format-InsertQuery -Table "Crowd" -ColumnNames @("Cluster", "data_da", "data_a", "numero_presenze", "layer_id", "area", "dettaglio") -ColumnValues @((Txt($record.Cluster)), (Txt($record.data_da)), (Txt($record.data_a)), ($record.numero_presenze), (Txt($record.layer_id)), (Txt($record.area)), (Txt($record.dettaglio)))
	$queryona += $query + " GO" + [Environment]::NewLine
	$index++
	Write-Host ($index.ToString() + " / " + $crowd_data.length.ToString())
}


$crowd_data = import-csv "C:\Users\Simone\Google Drive\Monica\data\crowd\presenze_sansalvario_15_210118.csv" -Delimiter ";"
$index = 0
foreach ($record in $crowd_data)
{
	$query = Format-InsertQuery -Table "Crowd" -ColumnNames @("Cluster", "data_da", "data_a", "numero_presenze", "layer_id", "area", "dettaglio") -ColumnValues @((Txt($record.Cluster)), (Txt($record.data_da)), (Txt($record.data_a)), ($record.numero_presenze), (Txt($record.layer_id)), (Txt($record.area)), (Txt($record.dettaglio)))
	$queryona += $query + " GO" + [Environment]::NewLine
	$index++
	Write-Host ($index.ToString() + " / " + $crowd_data.length.ToString())
}


$crowd_data = import-csv "C:\Users\Simone\Google Drive\Monica\data\crowd\presenze_sansalvario_18_241217.csv" -Delimiter ";"
$index = 0
foreach ($record in $crowd_data)
{
	$query = Format-InsertQuery -Table "Crowd" -ColumnNames @("Cluster", "data_da", "data_a", "numero_presenze", "layer_id", "area", "dettaglio") -ColumnValues @((Txt($record.Cluster)), (Txt($record.data_da)), (Txt($record.data_a)), ($record.numero_presenze), (Txt($record.layer_id)), (Txt($record.area)), (Txt($record.dettaglio)))
	$queryona += $query + " GO" + [Environment]::NewLine
	$index++
	Write-Host ($index.ToString() + " / " + $crowd_data.length.ToString())
}