# request getQuote
{  
  "origin": {
    "contact": {
      "name": "La Redoute Contact",
      "email": "laredoute@example.com",
      "phone": "07 1234 5678"
    },
    "address": {
      "country_code": "FR",
      "locality": "Anzin",
      "postal_code": "59410",
      "address_line1": "Rue Jean Jaures"
    }
  },
  "destination": {
    "contact": {
      "name": "Marquise de Pompadour",
      "email": "marquise-de-pompadour@example.com",
      "phone": "07 9876 5432"
    },
    "address": {
      "country_code": "FR",
      "locality": "Marseille",
      "postal_code": "13006",
      "address_line1": "175 Rue de Rome" 
	  }     
  },
  "package": {
    "dimensions": {
      "height": 10,
      "width": 10,
      "length": 10,
      "unit": "cm"	
	  },
	  "grossWeight": {
	    "amount": 100,
	    "unit":"kg"
	  }
  }
}
# request createshipment 
{
    "quote":{
        "id": "657d04eb6427830e7a36ffc8"
    },
    "origin": {
      "contact": {
        "name": "La Redoute Contact",
        "email": "laredoute@example.com",
        "phone": "07 1234 5678"
      },
    "address": {
        "country_code": "VN",
        "locality": "Anzin",
        "postal_code": "59410",
        "address_line1": "Rue Jean Jaures"
      }
    },
    "destination": {
      "contact": {
        "name": "Marquise de Pompadour",
        "email": "marquise-de-pompadour@example.com",
        "phone": "07 9876 5432"
      },      
      "address": {
        "country_code": "FR",
        "locality": "Marseille",
        "postal_code": "13006",
        "address_line1": "175 Rue de Rome" 
	}     
   },
   "package": {
        "dimensions": {
           "height": 10,
           "width": 10,
           "length": 10,
           "unit": "cm"	
	    },
	    "grossWeight": {
	        "amount": 0.1,
	        "unit":"kg"
	    }
    }
}

# data base
{
  "_id": {
    "$oid": "657d1ccd5b81744b47762543"
  },
  "data": [
    {
      "weight": 250,
      "price": 12.43
    },
    {
      "weight": 500,
      "price": 12.43
    },
    {
      "weight": 750,
      "price": 15.42
    },
    {
      "weight": 1000,
      "price": 15.42
    },
    {
      "weight": 2000,
      "price": 15.42
    },
    {
      "weight": 500,
      "price": 20.77
    },
    {
      "weight": 3000,
      "price": 26.07
    },
    {
      "weight": 4000,
      "price": 31.43
    },
    {
      "weight": 5000,
      "price": 36.77
    },
    {
      "weight": 6000,
      "price": 42.13
    },
    {
      "weight": 7000,
      "price": 47.49
    },
    {
      "weight": 8000,
      "price": 52.83
    },
    {
      "weight": 9000,
      "price": 58.83
    },
    {
      "weight": 10000,
      "price": 63.54
    },
    {
      "weight": 11000,
      "price": 88.19
    },
    {
      "weight": 12000,
      "price": 88.19
    },
    {
      "weight": 13000,
      "price": 88.19
    },
    {
      "weight": 14000,
      "price": 88.19
    },
    {
      "weight": 15000,
      "price": 100
    }
  ]
}

#link postman
https://api.postman.com/collections/28550901-b0a77a22-f007-4a33-b4ae-2ef97f9b1f2a?access_key=PMAT-01HHXDXVQE24P0QBFS03AFY1MK
