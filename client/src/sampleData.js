
var sampleData = {
  product_id: 63857,
  ratings: {
      1: 5,
      2: 7,
      3: 7,
      4: 6,
      5: 8
  },
  recommended: {
      false: 5,
      true: 28
  },
  characteristics: {
      Size: {
          id: 214265,
          value: 2.8484848484848485
      },
      Width: {
          id: 214266,
          value: 3.0606060606060606
      },
      Comfort: {
          id: 214267,
          value: 3.2121212121212121
      },
      Quality: {
          id: 214268,
          value: 3.1212121212121212
      }
  }
}

var sampleReview = {
    "product": "63854",
    "page": 0,
    "count": 5,
    "results": [
        {
            "review_id": 1100014,
            "rating": 5,
            "summary": "Ut et optio qui explicabo.",
            "recommend": true,
            "response": null,
            "body": "Sit labore voluptate velit hic qui qui voluptatem. Harum aut nemo voluptates eligendi. Sed exercitationem dolores aut sapiente eius in pariatur. Unde accusamus omnis. Omnis esse qui aliquam.",
            "date": "2021-11-21T00:00:00.000Z",
            "reviewer_name": "Erling.Nienow",
            "helpfulness": 16,
            "photos": [
                {
                    "id": 2131070,
                    "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "id": 2131071,
                    "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                }
            ]
        },
        {
            "review_id": 1100013,
            "rating": 2,
            "summary": "Aliquid earum et dicta magnam enim qui quo eum.",
            "recommend": true,
            "response": null,
            "body": "Voluptas ipsa quis atque eum velit ut minus sed. Officia vero eum amet consequuntur molestias cum. Illum repellendus sed et et explicabo recusandae. Ea placeat laborum sequi id. Hic est doloribus voluptates doloremque.",
            "date": "2021-04-08T00:00:00.000Z",
            "reviewer_name": "Deondre.Lockman20",
            "helpfulness": 8,
            "photos": [
                {
                    "id": 2131072,
                    "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "id": 2131073,
                    "url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
                }
            ]
        },
        {
            "review_id": 1100015,
            "rating": 5,
            "summary": "Asperiores iste quam quia rem illum labore voluptas consectetur enim.",
            "recommend": true,
            "response": null,
            "body": "Qui deserunt eum neque quam nihil sed dignissimos. Pariatur qui eum qui est ipsam debitis eum consequuntur. Sed et nihil adipisci in.",
            "date": "2021-05-09T00:00:00.000Z",
            "reviewer_name": "Vernice15",
            "helpfulness": 6,
            "photos": [
                {
                    "id": 2131068,
                    "url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
                },
                {
                    "id": 2131069,
                    "url": "https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                }
            ]
        },
        {
            "review_id": 1100012,
            "rating": 3,
            "summary": "Qui provident ea iste ut et qui.",
            "recommend": true,
            "response": null,
            "body": "Beatae qui hic rerum delectus enim. Exercitationem voluptates ipsum sed ea quibusdam veritatis exercitationem provident ipsa. Quis et eum veritatis commodi sit a fuga. Nostrum ea tempore.",
            "date": "2021-10-16T00:00:00.000Z",
            "reviewer_name": "Ryann_Kunde55",
            "helpfulness": 6,
            "photos": [
                {
                    "id": 2131074,
                    "url": "https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                }
            ]
        },
        {
            "review_id": 1100011,
            "rating": 1,
            "summary": "Cumque consequatur eveniet autem velit.",
            "recommend": false,
            "response": null,
            "body": "Possimus magnam eum consequatur consectetur magnam. Corporis ut qui quaerat dolore non eius. Optio ut recusandae autem. Accusantium et explicabo quia voluptates dolorum eum. Quo commodi quasi qui magni cupiditate magni dolore sunt. Magnam maxime eos eos quisquam a corrupti ut.",
            "date": "2021-11-02T00:00:00.000Z",
            "reviewer_name": "Skye_Goyette87",
            "helpfulness": 3,
            "photos": [
                {
                    "id": 2131075,
                    "url": "https://images.unsplash.com/photo-1519330377309-9ee1c6783348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                },
                {
                    "id": 2131076,
                    "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                },
                {
                    "id": 2131077,
                    "url": "https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80"
                }
            ]
        }
    ]
}





module.exports = {
    sampleData,
    sampleReview
}