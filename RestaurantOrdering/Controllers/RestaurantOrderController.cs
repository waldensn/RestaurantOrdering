using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestaurantOrdering.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RestaurantOrderController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;

        public RestaurantOrderController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<RestaurantOrder> Get()
        {
            return new RestaurantOrder[]
            {
               new RestaurantOrder()
               {
                    firstName = "John",
                    lastName = "Smith",
                    phone = "480-318-3312",
                    restaurant = "McDonald's"
                },
               new RestaurantOrder()
               {
                    firstName = "Mary",
                    lastName = "Jones",
                    phone = "480-901-3318",
                    restaurant = "Wendy's"
                },
               new RestaurantOrder()
               {
                    firstName = "Alex",
                    lastName = "Whitman",
                    phone = "480-842-1132",
                    restaurant = "Taco Bell"
                }
            };
        }

        [HttpPost]
        public String Post(RestaurantOrder order)
        {
            return "Order saved.";
        }
    }
}
