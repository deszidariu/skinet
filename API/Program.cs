using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container. here we add services to the dependency injection container.

builder.Services.AddDbContext<StoreContext>(options => 
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddControllers();
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

builder.Services.AddCors();

var app = builder.Build(); // everything that happens before this line is considered services configuration, and everything that happens after this line is considered middleware configuration.
// Configure the HTTP request pipeline. A http request is going through the middleware, before will reach the controller, and when goes back from the controller will go again through the middleware.
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
// }

//app.UseHttpsRedirection();

app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200"));

//app.UseAuthorization();

app.MapControllers();

app.Run();// this is executed at dotnet run.
