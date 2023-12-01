using Microsoft.EntityFrameworkCore;
using projectapi.Models;
 
var builder = WebApplication.CreateBuilder(args);
 
// Add services to the container.
 
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
 
builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(options=>
{
    options.IdleTimeout=TimeSpan.FromMinutes(10);
});
 
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("MyConString"));
});
 
builder.Services.AddCors(x => {
    x.AddPolicy("corsPolicy", policy => {
        policy.AllowAnyHeader();
        policy.AllowAnyMethod();
        policy.AllowAnyOrigin();
 
        //policy.WithOrigins();
    });
});
 
var app = builder.Build();
 
app.UseSession();
 
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
 
app.UseHttpsRedirection();
 
app.UseAuthorization();
 
app.UseCors("corsPolicy");
 
app.MapControllers();
 
app.Run();