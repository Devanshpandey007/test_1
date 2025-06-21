📚 API Endpoint Collection
🔐 Authentication (/auth)
POST /auth/signup
Description: Register a new user.

Request Body: JSON object with user details (e.g., name, email, password, etc.).

POST /auth/login
Description: Authenticate an existing user.

Request Body: JSON object containing email and password.

Response: Returns a JWT token for authenticating protected routes.

📂 Categories (/category)
All category routes require authentication.

POST /category
Description: Create a new category.

Controller: addCategory

GET /category
Description: Retrieve all categories.

Controller: getCategory

PUT /category/:id
Description: Update a category by its ID.

Controller: updateCategory

DELETE /category/:id
Description: Delete a category by its ID.

Controller: deleteCategory

🛠️ Services (/category/:categoryId/service)
Service routes are nested under /category and require authentication.

POST /category/:categoryId/service
Description: Add a new service to a specific category.

Controller: addService

GET /category/:categoryId/services
Description: Retrieve all services for a given category.

Controller: getService

PUT /category/:categoryId/service/:serviceId
Description: Update a specific service within a category.

Controller: updateService

DELETE /category/:categoryId/service/:serviceId
Description: Delete a specific service from a category.

Controller: deleteService
