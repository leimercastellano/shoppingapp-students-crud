# Shopp App with stored data
Our company KILLMIND has improved our shopping app and now we can retrieve and store the products in a remote database throrugh using an API.

Please, modify your client code according to the requirements.

## Requirement 1: Retrieve all the products from database
Bob, our devops, tell us that we have an API address where we can perform a GET to retrieve all the products from the database. The exact URL with its endpoint is:

```
http://ec2-35-181-5-201.eu-west-3.compute.amazonaws.com:8080/list-products/:idTeam
```

__idTeam__ is the codename assigned to you

You must retrieve all the data from the API and display the products.

![Bob The DevOps](https://fastnforward.blog/wp-content/uploads/2020/11/Is-DevOps-a-good-career-1020x642.jpg)


## Requirement 2: Fix the product title in the database
You have realized that the last of the records you are retrieving is not well-formed. There's a field with a wrong name. It should be _title_ instead of _title_

You ask Bob to fix it as it is his job but he replies:

> Please, do it yourself, I am too busy at the moment.

Bob give us a PEM key in order to access to the server:

```
-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAp8F8Zr2s+G8UOql6Dm0I6i99YIpWjtp78snYT8s+062xanjX
SD48mL06/M7+YBtz5hstE7m+/xRDFkL4MFz91fzHqNDre306I47kAEvCP9mfAKAi
VGeLKXkXyvpjG6tYRHPTvN7uVrZN+cqxzDnWvUm6mDgmytaiCHYI9dK3rOgmWbMj
NsFRZhV6nXNyEuxqbj0mPhVAx+762kgRY9aahENy2swvvSR1jWl7LNdSwkWuwCvJ
BS+uyxf6YXg1luafXWmahhBS/SD4P9BcOfQo1lrK5Y9Mwb61/wN0bvBrVqAOC/d7
ti8twBkaSPMOe/J4HssxJrmtaoDp4etF1Ak0QQIDAQABAoIBAB1YMzKlq0Qp6hf4
3Wj4mb6dYAkrKckDXvsxY61RmEPe9lHxoXb5rA/ryg2/B7A4HSX7Sv9QVqC4IqQa
Qt/y5FQyS5q0MP0BAtKFhEyo8+nHX5D0cgzhr+4pSIgxFHUam+4ddMRtGrQAX9N6
KW/YDkA+TW2jJOYGdYGVZCvcGFUeXiIPYX6ICcg1ZclbHqG/1da3sZhGkZQb2Csr
+qu4IS2Xa5UUVVLaSVo7aOFaIjMremfdAuTs/aGObmzcYrjv1pGftYbodQ51GzdB
7XqQs7qsvT7CdfvXvpx9a1adbsVocjm1aCSnClbDGjMqCf4iCGYbs9Zlv54/JAyA
Dn2gEaECgYEA33D46lQyxkZUfPZHBCPEe1QrMhEK7hPOClL4gDfQfxbBEn7nfTEw
qzl2mAt7BI+MEpXbKJo9AsGcGmiPBT2cn5gIfZcGX2raM28fyPMHcRsgxpR4DzaI
P/hXzjBRCAJErPS6HkfqnkybmPRbHAbvo+TFOASz4OVpQ97xJkvELHsCgYEAwDNH
RfkIMcuhPJB3GpOLcvmck4dugI5QL28Z175zggWGGgzvAVkL/gjPn9pe5+TjHC4U
XH0sI5VzqFb+or39A31sYv5yjLIG9GqRYpW/juyzf4EnNm+SxC20Om5Nzhi046IO
VvQXkGS4QiDewSWaLNT/JCPGEQfjnHZKcnnU23MCgYA/25+oCMxCElOPKyt8qWQ8
AwAdXPWMuShHlxLiQhFaYPxo9s/d3bMVHGUiaxWLZiMYJK/v2LTbFs4wVfWZ/9PF
YMP8cK8nkfgufvHMknhsAN7LIh916ZXjAmzFxtVBvrQ14fNXOCJ7f1Vwz1VCm1Dd
vEIJEn7+JVKCTTMKSNkWBQKBgQCkTrINlZl1yFjsh6vqYlwCTHWYgVzsNb1C772t
/DiO3N4JgykHg/KGl023oF0l7TxiKNprPu7u9KLNNKG2yqhzxVNVRaTztnXPmRL0
roP2UVAaHnVBShyz7UZ39Tg6ilCJkU6k80L5w8Dpd2Q2xkiJLwV3BcYbZR0l8tIu
DwzzFQKBgGFyfsRCuYhx7WuNFMoSaYP7HJ3ga/MKY9au4vYlEH0vIiXuNNCgMpCt
iFhNHGde+JVAiQkgnq4StHh93fWwKs6r8w4jV7P4hUJm4rS5Nk6t0sbShZXOTKBn
0snzaKnI26LcW/C37catPcO7gGI7/8pjysC4KPfiXtuHUGbA5yNw
-----END RSA PRIVATE KEY-----
```

> Just save it to a PEM file to connect to our server. Once there, find a **file** with a **JSON** format, and fix the JSON field with any text editor. Please, fix only **the file of your team**. Others maybe upset if you mess up something that is not yours.

Bob also reminds you how to connect to our server:

```
ssh -i "file.pem" singulars2021@ec2-35-181-5-201.eu-west-3.compute.amazonaws.com
```

## Requirement 3: Do not display products that are going to be released later than this year
Some of the products (one only, to be precise) may be released later than the current year. Modify your code to **not display** the products that are going to be released in the future.


## Requirement 4: Add new products

Now went to be able to also add new products to the database. Please, modify your code so, when a new product is added in the form, it is inserted in the database. This [link](https://www.geeksforgeeks.org/get-and-post-method-using-fetch-api/) maybe helpful

The endpoint to add a new product is:

```
http://http://ec2-35-181-5-201.eu-west-3.compute.amazonaws.com:8080/add-product/:idTeam
```

You must perform a POST method to this endpoint. Have a look at the response of this AJAX call: ii may contain important information

## Requirement 5: Bob's petition
> Buddy, please, add for me this product:

* Title: "The Adventures of Robinson Crusoe".
* Price: 5.25
* Year: 1960

Can you add this product? Why not? What could you do in your client application? What are you going to tell Bob?

## BONUS Requirement
Implement now the DELETE functionality.

The endpoint to remove a product is:

```
http://http://ec2-35-181-5-201.eu-west-3.compute.amazonaws.com:8080/add-product/:idTeam/:idProduct
```

Where __idTeam__ is your codename, and __idProduct__ is the unique id provided by the API when we add a new product

Good Luck! :four_leaf_clover:
