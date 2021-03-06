using System;
using System.Collections.Generic;
using System.Security.Cryptography;

namespace Core.Entities.OrderAggregate
{
    public class Order :BaseEntity
    {


        public Order()
        {
        }

        public Order(string buyerEmail, 
                    Address shipAddress, 
                    DeliveryMethod deliveryMethod, 
                    IReadOnlyList<OrderItem> orderItems, 
                    decimal subtotal,
                    string paymentIntentId)
        {
            PaymentIntentId = paymentIntentId;
            BuyerEmail = buyerEmail;
            ShipAddress = shipAddress;
            DeliveryMethod = deliveryMethod;
            OrderItems = orderItems;
            Subtotal = subtotal;
        }

        public string BuyerEmail { get; set; }
        public DateTimeOffset OrderDate { get; set; } = DateTimeOffset.Now;
        public Address ShipAddress { get; set; }
        public DeliveryMethod DeliveryMethod { get; set; }
        public IReadOnlyList<OrderItem> OrderItems { get; set; }
        public decimal Subtotal { get; set; }
        public OrderStatus Status { get; set; } = OrderStatus.Pending;
        public string PaymentIntentId { get; set; }
        public decimal GetTotal()
        {
            return Subtotal + DeliveryMethod.Price;
        }

    }
}