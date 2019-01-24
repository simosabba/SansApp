
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


--elab data
/****** Script for SelectTopNRows command from SSMS  ******/


SELECT AVG(C1.numero_presenze) as MediaPresenze
  FROM [Monica].[dbo].[Crowd] C1
  inner join [Monica].[dbo].[Crowd] C2
  on C1.data_da = C2.data_da and C1.Cluster = 'Presenze' and C2.Cluster = 'Residenti'
  where DATEPART(HOUR, C1.data_da) > 22 or DATEPART(HOUR, C1.data_da) < 2

  
  SELECT AVG(C2.numero_presenze) as MediaResidenti
  FROM [Monica].[dbo].[Crowd] C1
  inner join [Monica].[dbo].[Crowd] C2
  on C1.data_da = C2.data_da and C1.Cluster = 'Presenze' and C2.Cluster = 'Residenti'
  where DATEPART(HOUR, C1.data_da) > 22 or DATEPART(HOUR, C1.data_da) < 2
