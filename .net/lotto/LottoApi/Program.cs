using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


// ? Kestrel 수동 설정 (외부 모든 주소에서 접근 허용)
builder.WebHost.ConfigureKestrel(serverOptions =>
{
    serverOptions.ListenAnyIP(5286); // 포트 번호 확인!
});

// ? 컨트롤러 서비스 등록
builder.Services.AddControllers();

// OpenAPI (선택사항)
builder.Services.AddOpenApi();

// DB 등록
builder.Services.AddDbContext<LottoDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// 개발 환경이면 Swagger 표시
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// HTTP 리디렉션 끄기 (원하는 경우만)
// app.UseHttpsRedirection();

// ? 컨트롤러 라우트 등록
app.MapControllers();

// (테스트용 날씨 API는 유지 가능)
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
