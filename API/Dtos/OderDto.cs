namespace API.Dtos
{
    public class OderDto
    {
        public string BasketId { get; set; }
        public int DeliveryMethodId { get; set; }
        public AddressDto ShipAddress { get; set; }
    }
}