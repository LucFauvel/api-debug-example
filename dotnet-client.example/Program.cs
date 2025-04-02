// See https://aka.ms/new-console-template for more information
using System.Text.Json;
using System.Net;
public class Program
{
    static async Task Main()
    {
        try
        {
            using (var client = new HttpClient()) {
                using HttpResponseMessage response = await client.GetAsync("https://server.congres-2025-example.workers.dev/api/ascii");
                response.EnsureSuccessStatusCode();
                string responseBody = await response.Content.ReadAsStringAsync();
                var stuff = JsonSerializer.Deserialize<ResponseBody>(responseBody);
                Console.WriteLine(stuff?.content);
            }
        }
        catch (HttpRequestException e)
        {
            Console.WriteLine("\nException Caught!");
            Console.WriteLine("Message :{0} ", e.Message);
        }
    }
}

public class ResponseBody {
    public required string content { get; set; }
}
