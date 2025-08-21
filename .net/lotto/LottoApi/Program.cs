using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


// ? Kestrel ���� ���� (�ܺ� ��� �ּҿ��� ���� ���)
builder.WebHost.ConfigureKestrel(serverOptions =>
{
    serverOptions.ListenAnyIP(5286); // ��Ʈ ��ȣ Ȯ��!
});

// ? ��Ʈ�ѷ� ���� ���
builder.Services.AddControllers();

// OpenAPI (���û���)
builder.Services.AddOpenApi();

// DB ���
builder.Services.AddDbContext<LottoDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// ���� ȯ���̸� Swagger ǥ��
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// HTTP ���𷺼� ���� (���ϴ� ��츸)
// app.UseHttpsRedirection();

// ? ��Ʈ�ѷ� ���Ʈ ���
app.MapControllers();

// (�׽�Ʈ�� ���� API�� ���� ����)
var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast");

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
