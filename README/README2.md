crear proyecto
Aplicacion web asp net core MVC

Herramientas-> administrador paquetes nugget-> administra paquetes nugget

Input search=  entityframework
Choose:
microsoft.entityframeworkcore.sqlserver
microsoft.entityframeworkcore.tools

Select the project , and press button Install, Ok , accept. For each Library



Create database in sql server and a table

go to Administrador de paquetes nugges => consola de paquetes nuggets
PM>  Scaffold-Dbcontext "server=localhost; database=MVCCRUD; integrated security=true;" Microsoft.EntityFrameworkCore.SqlServer -OutPutDir Models

Check the warnin regarding to connection String
in appsetting.json add tag bellow allowedhost
"ConnectionStrings":{
	"conexion": "paste the sa,e url (comment the url in dbcontext in c# code)"
} 


In program.cs
add code after AddControlllerWithViews

builder.Services.AddDbContext<MVCcRUDCONTEXT>(options =>
		options.UseSqlServer(builder.Configuration.GetConnectionString("conexion")))

In Controllers folder add new Item
Choose controller de MVC con vistas que usan Entityframework, Choose table model and dbcontext


In VIews/Shared/Layout.cshtml
add menu
modifie only controller name=  asp-controller="Usuarios" asp-action="Index"
