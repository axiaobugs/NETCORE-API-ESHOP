﻿using System;
using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class BasketItemsDto
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string ProductName { get; set; }

        [Required]
        [Range(0.10,double.MaxValue,ErrorMessage = "Price must be greater then zero")]
        public decimal Price { get; set; }

        [Required]
        [Range(1,int.MaxValue, ErrorMessage = "Quantity must be greater then one")]
        public int Quantity { get; set; }

        [Required]
        public string PictureUrl { get; set; }

        [Required]
        public string Brand { get; set; }

        [Required]
        public string Type { get; set; }
    }
}