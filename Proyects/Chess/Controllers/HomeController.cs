using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Chess.Models;

namespace Chess.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

	public IActionResult Index()
	{
		var game = new ChessGame(); // Correctly initialized ChessGame object
		return View(game); // Pass the game model to the view
	}

	[HttpPost]
	public IActionResult RemovePiece(int row, int col)
	{
		var game = new ChessGame();  // You might need to retrieve an existing game state instead
		game.ClearPiece(row, col);
		return View("Index", game);  // Re-render the view with the updated game state
	}

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
