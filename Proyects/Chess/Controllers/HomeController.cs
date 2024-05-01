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
		game.makeMove();
		game.makeMove();
		game.makeMove();
		return View(game); // Pass the game model to the view
	}

	[HttpPost]
	public IActionResult MakeComputerMove(ChessGame game)
	{
		game.makeMove();  // Assuming this method updates the game state appropriately

		// Save or update the game state as needed

		return Json(new { success = true }); // Respond with success or failure
	}


    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
