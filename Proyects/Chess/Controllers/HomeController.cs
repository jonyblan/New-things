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

	/*
	@ Maybe implement something to play against the computer
	[HttpPost]
	public IActionResult RemovePiece(int row, int col)
	{
		var game = new ChessGame(); // Here, you would ideally retrieve game state from session or database
		game.ClearPiece(row, col);
		return Json(new { success = true });  // Return minimal JSON indicating success
	}
	*/

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
