
bulk insert Activities from 'C:\Users\Simone\Google Drive\Monica\data\attivita-commerciale\attivita_commerciali_geo_CAP.csv'
WITH (
FIELDTERMINATOR = ',',
ROWTERMINATOR = '\n',
ERRORFILE = 'C:\temp\err\myRubbishData.log' 
);



bulk insert Crowd from 'C:\Users\Simone\Google Drive\Monica\data\crowd\presenze_sansalvario_19_250318.csv'
WITH (
FIELDTERMINATOR = ';',
ROWTERMINATOR = '\n'
--ERRORFILE = 'C:\temp\err\myRubbishData.log' 
);