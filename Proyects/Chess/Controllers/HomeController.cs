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
		//game.makeMove();
		return View(game); // Pass the game model to the view
	}

	[HttpPost]
	public IActionResult MakeComputerMove(ChessGame game)
	{
		// Assuming game contains updated state, pass it back as JSON
		return Json(new
		{
			success = true,
			boardImages = game.BoardImages, // Update board images
			moves = game.moves.Count, // Update moves count
			flags = game.boardFlags // Update flags
		});
	}


    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
