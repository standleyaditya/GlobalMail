# GlobalMail

To Use your own template you just have to add folder to /emails folder with name of your template and file with name html and format .pug
Here an example :
![image](https://user-images.githubusercontent.com/45848403/122339432-4ae67680-cf6b-11eb-9ee8-04e304f0458a.png)

Then change Template fields in app.js to the name of your folder
Here's an example :
![image](https://user-images.githubusercontent.com/45848403/122339611-7f5a3280-cf6b-11eb-9624-52e393eb7ed1.png)

Note :
1. you have to pass the email recipient in the request body or just hardcode it yourself
2. if you want to pass some data or data from form you just put the data or object in locals field
    Here's an example :
    ![image](https://user-images.githubusercontent.com/45848403/122339879-c9dbaf00-cf6b-11eb-9b3b-65f206591482.png)
3. you need to make .env file for sender email info, email and password
    Here's an example :
    ![image](https://user-images.githubusercontent.com/45848403/122340189-2ccd4600-cf6c-11eb-951d-3d726774c766.png)
    *it's now my real password and email, it doesn't exist
