#fizz buzz

Application steps :
step 1 : install node js , npm (node package manager)
step 2 : clone this repo
step 3 : run command npm i on the root folder  to run the application


Test steps: 
run command npm test to run all test cases

open http://localhost:8000 or you can directly use the API 

GET http://localhost:8000/api/user/fizz-buzz?high=10&low=1

QUERY PARAMS :
low [value] //OPTIONAL [default = 1]  
high [value]  // MANDATORY

SUCCESS RESPONSES:

{
    "message": "successfully fetched",
    "status": "success",
    "result": [
        1,
        2,
        "fizz",
        4,
        "buzz",
        "fizz",
        7,
        8,
        "fizz",
        "buzz"
    ],
    "_status_code": 201
}

GET http://localhost:8000/api/user/fizz-buzz?high=10&low=40

ERROR RESPONSES:

{
    "message": "higher limit should be greater than lower limit",
    "status": "error",
    "_status_code": 401
}





