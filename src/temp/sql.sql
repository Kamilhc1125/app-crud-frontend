USE [apitest];

SELECT * FROM [dbo].[Products]
SELECT * FROM [dbo].[Categories];

SELECT 
	p.Id,
	p.[Name] AS [Product],
	p.Price,
	c.[Name] AS [Category]
FROM 
	[dbo].[Products] AS p
INNER JOIN 
	[dbo].[Categories] AS c ON c.Id = p.CategoryId