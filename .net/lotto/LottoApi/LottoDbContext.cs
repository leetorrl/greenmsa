using Microsoft.EntityFrameworkCore;

public class LottoDbContext : DbContext
{
    public LottoDbContext(DbContextOptions<LottoDbContext> options) : base(options) { }

    public DbSet<LottoResult> LottoResults { get; set; }
}
