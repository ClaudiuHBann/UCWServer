using Server.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddTransient<RadixService>();
builder.Services.AddTransient<CurrencyService>();
builder.Services.AddTransient<TemperatureService>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(config => config.AllowAnyMethod()
                          .AllowAnyHeader()
                          .SetIsOriginAllowed(origin => true)
                          .WithOrigins("https://localhost:5001/")
                          .AllowCredentials());

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
