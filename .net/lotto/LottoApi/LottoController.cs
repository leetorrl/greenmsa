using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class LottoController : ControllerBase
{
    private readonly LottoDbContext _context;

    public LottoController(LottoDbContext context)
    {
        _context = context;
    }


    [HttpGet("results")]
    public async Task<IEnumerable<LottoResult>> GetResults([FromQuery] int limit = 20)
    {
        return await _context.LottoResults
            .OrderByDescending(r => r.Id)
            .Take(limit)
            .ToListAsync();
    }


    // 로또 번호 생성 및 저장 (간단히 임의 생성)
    [HttpPost("generate")]
    public async Task<IActionResult> Generate([FromQuery] int lines, [FromQuery] int addressNum)
    {
        var rand = new Random();
        var results = new List<LottoResult>();

        for (int i = 0; i < lines; i++)
        {
            var numbers = new HashSet<int>();
            while (numbers.Count < 6)
                numbers.Add(rand.Next(1, 46));

            var arr = numbers.OrderBy(n => n).ToArray();

            var lotto = new LottoResult
            {
                First = arr[0],
                Second = arr[1],
                Third = arr[2],
                Fourth = arr[3],
                Fifth = arr[4],
                Sixth = arr[5],
                AddressNum = addressNum,
                CreatedAt = DateTime.Now
            };

            _context.LottoResults.Add(lotto);
            results.Add(lotto); // 리스트에 추가
        }

        await _context.SaveChangesAsync();

        // ✅ 생성된 로또 결과들을 JSON으로 반환
        return Ok(results);
    }
}
