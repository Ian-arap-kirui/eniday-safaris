import TurkanaImg from "../assets/places/turkana.png"
export const tourPackages = [
  // Wildlife & Safari
  {
    img: "https://images.pexels.com/photos/17820242/pexels-photo-17820242/free-photo-of-wildebeest-on-savannah.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Maasai Mara National Reserve",
    location: "Narok County, Kenya",
    description: "Witness the Great Migration and the Big Five in Africa’s most iconic savannah.",
    price: 6700,
    type: "Wildlife & Safari",
  },
  {
    img: "https://images.pexels.com/photos/19320975/pexels-photo-19320975/free-photo-of-elephants-in-nature.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Amboseli National Park",
    location: "Kajiado County, Kenya",
    description: "Elephants roaming against the backdrop of Mount Kilimanjaro.",
    price: 5200,
    type: "Wildlife & Safari",
  },
  {
    img: "https://images.pexels.com/photos/30049607/pexels-photo-30049607/free-photo-of-lesser-flamingos-wading-in-kenyan-lake.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Lake Nakuru National Park",
    location: "Nakuru County, Kenya",
    description: "Flamingo-filled lakeshores and a thriving rhino sanctuary.",
    price: 4800,
    type: "Wildlife & Safari",
  },

  // Coastal & Beach
  {
    img: "https://images.pexels.com/photos/1476356/pexels-photo-1476356.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Diani Beach",
    location: "Kwale County, Kenya",
    description: "Pristine white sands and turquoise waters for luxury relaxation.",
    price: 8500,
    type: "Beach & Coastal",
  },
  {
    img: "https://images.pexels.com/photos/15898680/pexels-photo-15898680/free-photo-of-narrow-alley-in-town.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Lamu Island",
    location: "Lamu County, Kenya",
    description: "A timeless Swahili paradise with donkey carts and coral stone architecture.",
    price: 7200,
    type: "Beach & Coastal",
  },

  // Adventure & Nature
  {
    img: "https://images.pexels.com/photos/8427984/pexels-photo-8427984.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Mount Kenya",
    location: "Central Kenya",
    description: "Trek Africa’s second-highest peak through alpine forests and glaciers.",
    price: 6100,
    type: "Adventure & Nature",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Hell%27s_Gate%2C_Kenya.jpg/500px-Hell%27s_Gate%2C_Kenya.jpg",
    title: "Hell’s Gate National Park",
    location: "Naivasha, Kenya",
    description: "Cycling safaris, geothermal springs, and dramatic cliffs.",
    price: 3900,
    type: "Adventure & Nature",
  },

  // Culture & Heritage
  {
    img: "https://images.pexels.com/photos/12339475/pexels-photo-12339475.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Maasai Cultural Village",
    location: "Maasai Mara, Kenya",
    description: "Immerse in Maasai traditions, beadwork, and jumping dances.",
    price: 2500,
    type: "Culture & Heritage",
  },
  {
    img: "https://images.pexels.com/photos/30282791/pexels-photo-30282791/free-photo-of-aerial-view-of-coastal-village-in-lamu-county.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Lamu Old Town",
    location: "Lamu Island, Kenya",
    description: "UNESCO-listed Swahili heritage and dhow boat tours.",
    price: 4300,
    type: "Culture & Heritage",
  },

  // Hidden Gems
  {
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExIWFhUVFRUVFRUVFxUVFxUQFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBAUGB//EADoQAAEDAQcCBAQFBAEEAwAAAAEAAhEDBBIhMUFRYXGBBROR8KGxwdEGFCJCUhUy4fFiI1OCkjNDcv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACYRAAICAQQCAwACAwAAAAAAAAABAhESAxMhUTFBBBRhcZEiMoH/2gAMAwEAAhEDEQA/APVwUFpucIFiamRiUAlS8VY5iUtKrJCpkFRN5o2VQJ1SlyB8l95qUu2KpCN1PgOS2+UC5VwiHFNMXI0oyo13CkhOwoKhaoinkFCwpCa4lLCjIKBdUxCNxS6nkFAa8pi5LdTXTmi0HJBWCY1WkRCUuGyUOGyBWMSEA+EC7hQKhBFXhAuOyLTwjeRYAAULCpJULii2AJQhEoSqTJCoSiClISsYbyEqQpITAkIoXgolyLgtvlQ1itAswRNlC85zR0pGQWlbKADhoqjY1ZTsxCiU16KSZcbGDoq3WALTSp9VpbRO/wAlluSLxRyXWKEv5bldn8u7ZA2GVW7IMUcltk/5JX2B24K6jvC3aFZK9geNPRUtWQYIwGzPGiBaUz6b2qvznalbx1LM3GgwdkeynmdEC5apkUGUwcq76IemIsvIOMqX+El5CGMiOUvmpSVSEMWBQgJJRlUSMCpCWUCmAVLqWVJTESEUJQTENCBUBUKLCgSpeQlS8nYqCXIShKKLCgyojCiWQ6Omx4KtaFl8syttGjzK8lzOlRC0KwNGydtNXMjdACspdVop0+U1M8q9pHCKHZKY4VzRwkAG4TjqgBwEC0bKCd0pJQ2BntFGnGLZ6BcG2tpD9j13bQ94yI9AVy6viNVuYaerXD5LFzSZrFM4FUs0n0VeHK7FbxQHOmzsfusVS3tP7AO66NPWfREtNGYAbo3eUxtTT+34pfObsuhTZm4oby0bvKUVxsgbQNk8mKkNCkKs1Qh5gVpk0WwpdVXmI+YqsRZdQhJfRvJ2KgwiWJZRlOwohalhOiIScx4lZahC0uogj9B7ao02PiLsckfVZP5CRotFsyFp2RFJw0K3CyukEkni6Fc+zucMLxjgBYP5sbNV8Z+zllMWgaytNOwk43CRriAlqWa7mI6q18mLdWZvRaKQ9RGGorTcRODOu1WtVAcrA5ee5IpI0ApgVnBTgpqY6NAcnDuVmvo+YnmhUafMKBruVElMGocx0ObQ5EVnbpQ1S6s3IpFzbUVDav8AiFTdU8sqGyg1De0Z/wCs/VYq3hodowdAQtwplO2k5RyWpHEf4EdC1I7wJ/HZeiFJyYMcqzmvbFx0eX/oVQpH/h+qvW/q3TNJVbs+xVHo8W7wSrx6x81W/wAJrDNh7Cfkvcucd1lew7n1Q/lakf0ahF+jyA8Krfwd6Jv6XVGbSvVvpmP7iO6xV3Qf/l+Kl/O1EVHQgzz5srxiQfQpA07Fdh9d27j3J+qyOc8n+0rfT+ZJ+Ql8ZLwZm0ygWlXXKnPSVAx40XStddoxei+mUXSckKtFzcwVqa+oMpHorXV6msfBTLXlfFf2NaSrm/6MVlNS8Lox5C3ufUGLjA4iPRILa/YIG0O1aD1xXPqZzfKRtDGK4bALRBkSekwtVG2VDlTI7fdZTbHjKB0CqfXedSpWg36QnrJHQdaHcNPzVbrTODgCOAFzy4nNMCto/GS8mUtdmp1YbfL7ILNdCi12Ik70jcKwRFcLCpKy+uiVqHSbXG6sFcbrkyipfxv0e4dbzRuiHjdcmUC4pfXfY9xHbbWA1CItY3XDkoyUnoNewzR3fzbd1a2sDqvPAlMKh3UPTkvZSkj0bagVrag3XmPOO5TCqdys2pIvg9W14TXwvMU6ztz6rUy1EaqHqtFbdnd8wKeYFxvziH5wqHrD2jsGoFW6r7wXIdayqalpO6h6xS0jreZOZRNWNfkuKa53Seed1ObL2zqWu0N1x7rmVnU5yVTqhVZcqjFtlUkWCuAcAi61OVTXIueto6avwS5OvIXV3FVy4qF6F5dkIUuEYSlflhlyN87JSVA5aYfhOQCUzKiBSFWoJkOVFhclLlAUCrUSGyEpSUSlK1SM2SVFFFVCsdFRRTiTYUFEUYjsiikIwliOwQijCMKHEqwKQiAmAUOA0xIRATwiAspQNFIATSiAjCweizVTQl5S8mISkrN6D6K3EAuSyiSij676HuikoBOoVa0PwHqlaVWpVrHRIeoKFCmCJWq0iHqFcKQnkKl1paNVtGDM3IeEqDa7TqmJCrBk5EQKl5QuCeIWKjKBck8xXiTY5SlEvCQvCaQmwyolvBRVRNl19G8FzTbW8pXeIN0BPwRiKzqhw3RvhcKtbXHLD5rKZOpVbYZHqPMCDqwGq80ajtXH1KZlQ7o2gyZ6MVgg60AZriMtB4RNclTtods64to2KqqWp3TouX+Zjb4o/nPeKe2LI69G0nUyFeLQFwxafclcH8WfiN9nYBTDbzwC116XAYybhz0g9VMoJK2UpdHvBaQuT4l+L7JZ3XKlYBwza0FxHW6DBxyK+KjxW0Xg7z6pN6//AHuIkHMtmPgsteq57i92JcZJWDr0i7Z9+sXjtGtjTeHfpDpGIg878cFaHWpq+DeD+NVbKXGmQLwggiR1Gx54X0Ww/i2yPa0GoWuMNIeDN7AZjDPWVUVH2JtnsfzbUfzrd15jxLxNtJpcSGtGbnfQLgU/xNRqOul5zgFwhp+22KtwivIZM+hDxWlMXxPVF1uavGmmnZWIwVbKDNnq3W9u6pf4mwalefNoQ84prTQrO+PE2nfug7xHlcHzD7lC8TqqwRNs7L7YN1WbS1cq8fZUkqk0hYnSdaxoCqzbX6GPfK5r6sJXPd0VBidZviDtTKJ8S6rh47lEA8oCjq1vE9yRwFmPiA/iViLClfhqnwKjr0/ETp8Si7xE8eq4TqhQa4pUHB2/6i7hRcjzuAolQ+Dstas9u8SpUYDziRIaMSRwmt9rFGk6o6AGjCdToF82tfiTnvLi4486bArGeriWont6f4ss96HNewR/cQDjtDSTofRPZPxVZ6lXyxLRjFR8NaYE6mQvnNSvJJ3+Wg9FWCVnuyHij63aPE7Ox1x1VgdkQTiDzsj4f4jRrgmm8OjMYgjsV8oZUieRHZW2K0upm+xxDowO07I3pCo+tOeOfRJ5vC8HY/xTVBh5vAcAEncrBV8VqOc5/muH6pDZMD49VW6isWfSDXKDax49F52w/iaiQ0VCQTmcbrepz/2uxQtbX0TVogPwcWgm6SWmDM4gKtxBieU/FP4mq+a6lSeWsZLXAAC87906xovM1ajn4lznEYS4k58laPFqTjUc90frl8tN4YkyAeIWVpWDd8hQX04yOmuHXskewjMFPMqOrTG31yzz7IGRkQZGOmOX3TUXBrgcRDgQRjEY5anVJiSraeBk4jaUm6Eertvi1C1GnRIfdBH/AFDAMxElvvPBcur4fZ2Vf1OdciQGm8XY/paOufcLDUtDCSfKaJM4XhhjgADgMvRU06l136cCcnbYznoluX5A+kWa65jSwuDS0XQQcBGX0Uc12/wXlfwzaHis29WIYZkF0g4YAg5YnBe1JC2jrWhLTOa4uGnwKjXO/ifQrW9yV1QDOfitN0Nr9KhVf/FEl+3ySutBnLDvKqfayP2juSln+Dw/TTfdt8vukffOo9VTTtoyIxVwrg5R77JZ0PCxSKnCAvDRvxKuJKUv3P0RuhtC3n7t9EsP/kPirC8cKB6W6PbKbjz+4fH7KCyuObh8U/nbdiqalrduOCNE91i20M6zxm4BZH1QZAMnphKD3zrmsdqeKYL4k9YQ9Zpck7cRH2emCbzhOskTjjuovP1q95xdEyd3/QqLl3tQdLo6fiHiDKoDKl8iZEHI5Tiqv6ACJp1Qdg4fUfZbz4aHf3Nx4K0U7Fdykei5FrNeG/8Ap3LST/2R56v4PXBm4D/+Ij0WGpSc3BzSDyCF7QU3cpoIERPVWvky9oT+NH0zwwCsYV6m0+GU3AzTx3bhiue7wIGIMcY/UK18iL8mMtCSfZxpGijWSuo7wd/8Z5ByCzGxvb+0+ivcT8GbhJejI8XeQrqNpIBEzILSP+JxI+AWas0tOPxQpBaNWiWaW13f2XobPYcx7yVNUdOsRKVyacEhEBdIDTHIMJH4YFEO2Q6hLmxhvIByE8IXlYhwT6I3Ukq0FJgW06xaQWyCCIxOa9X4R+IAW/8AVc0EZ5knkadl5FzieiUO4Hoop+hqTR9EsXiLat4s0Mf5S2i2NZg94accCduF4eyW+pTksJbOBhU1qtSo4uN4kmSmpSLyPoFmeKjQ5rgQconTA4aK4NGy8b4UK9MmG4bExjpiuhStFcZku4P3UPWS4ZcU+ju2hrYOEYYdVKFSWB2AkA4Lz9atWcAMsZOnQYKt9SrdLQCRtxwlvplqD6PS+YD+7hJUYHfuPYheSFKs7cDrj6YLRSsdQD++Ph8U3rRXsMG/R6CtSY0gvPSSmNdo47hcD8m4mXOk6TOHdI2xOJJc87ZnJT9mIbMvSNlu8eY0GP1OxEadzquFaPGXvZdiJMyMOy2VPBwcQYIRb4OzUkmNN5SWvF+WT9fUfoPg9vNwhxy/tnDIQGgKWioak8cY7YHur6VgYOFcKTdApl8iJoviz9nBLHjDHBRd/wAkKLL7H8F/T/Tf5nvZL5kKpojA5hWEDvEqTTkhqJw4nHRJUeI0S06uCLGWwhA3/wAqsWjRTDsk2hl7OqLQqp2StPvhKyi00GHNgPUJHWKl/BvYKmvVc1zccDIOUA6Ge0d1bTqXhIyOWaeTRNJ+hHWOl/2x/hR1ion/AOtqtj39UpQ5vseC6I2xUv8AtN7hMbHSz8tsZZDb36Kp9QgKfmfv2SzKxj0Q+F0f4QD81P6JQmbvxR89MKk6Jbz7Dbh0hR4PQn+1K7wmlo0d1fTM54KwdSnuSfse3HoytsNMZNCBslP+Iy+q2Ye/gsrqoCnKXZWMehPyzB+0KynGgA6YJQ4a4hR3RK2KkvCIXoBAgHNOHJc+xi3t1XWrAEddNBuiRjj3Vb3ZA57/AFQxS4XBYXxHPw2lVVH/AKgARsRx6ZoS4H7nqlv4ycNsMM0VyQzQBpPZMGqjeddeOeU9N5jLXA7lOi0yPEGEbhHZEunsqS77c9kNFXQwO/bqqnPxRe0kHHH3gg9xywnhFEubH7/FRC63UH1hRTyFs1PmZQv5Ee5SmsM+x6aJbwie0dVpZikB9Qp2YZajD33VV/MHsflKvbUGRSsqio08udFBnPB7rQ4CJ5Hc691TUeSemR0nZADh05J4w9+hWek+dFc9/OKGV/AjwHNLTI0ww/2s9jt2F15ODrocciZwAGeSte6TI6LHarwcHtaCW59DifohdETtf5I6hdofYRBEZrIbQCLwdM4j6kSlJOPChWa2maXjbvCUMB7coUal4ZxzqrrhiQRKtLsRS9ka4fRZRWcX3BGZgknKM4VjqhLTA/UDABwk54dsdVRZKZBvOHfnI4npohKzJu2kjo0puic8uOyaVR5nKHmc9EG1l5PMJTCrvYYEKppIx+eiVitGiMFCYPyVdKpt0OCcHb0U20O0MHoPOXvBS93zzwPogcdMgm2Uhw3c6e5Qb7CqNSPSOidhmJGEx1O6EIepznt/hIXTjgPlJ0VNYSYGOOCZgwJJExl794KmHAweJxwjXjZLXJjnf6LK/AnPRPUed9PeKEGSGeQCMMhjH0+6aq8YdOZ4+qRpxx94f69EarDPrG3eZ6pkBon4+801zAHnnH/CBJgYZGScMMUSeMsuvPvVSLyVEEaj4qIF/Ppkgnj+CxHa6MdJx9c/irXGNMHAkRvGPyUUVUIlXFszEYj0lKyp2Okbx/tRRKgLqbyRn/vRGoJBjRRRNrmhorJyOuZ5CFR2Ee9lFFDZSEpOg/q01+6f8ve9TjOE4kKKKU+R1wYbMPLcWPgOcMM3fp69ZW9wBgR25CCic5U0c+m6uPQ9F+HxHZAWsyR3GvvAoKIkazbjVfhktbjMxgc4wI5CeynC45uMXs+kE/ZRRKL/AMTBcanBXVeRdgmTAz4iE19zYBgzP+vooouheDZmp1CYJbG4nuDnip5YzHO+XKiiy8F0RrAM+fZQtLyNT9NNPRRRQn4CXC4FpZSeo6aImre+uiKiT8sqHgNV2umXc8IPeBEYzEZ4bZqKISVA+AtcNciB7+SDqgg4b5bjr6qKK4rgGih7TejUCf8AxIn7KvypI5y+v3UUTJaRpLgIBnPH7fJKXEnAY55/D3uooheaKXgLJz01+3RCqDmTE44cKKJJlJFZHHyUUUScmQf/2Q==",
    title: "Chyulu Hills",
    location: "Eastern Kenya",
    description: "Volcanic landscapes and horseback safaris in Hemingway’s ‘Green Hills’.",
    price: 5800,
    type: "Hidden Gem",
  },
  {
    img: TurkanaImg,
    title: "Lake Turkana",
    location: "Northern Kenya",
    description: "The ‘Jade Sea’ with surreal desert landscapes and tribal cultures.",
    price: 6800,
    type: "Hidden Gem",
  },
];