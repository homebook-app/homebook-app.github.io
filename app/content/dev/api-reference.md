# REST API Reference

HomeBook exposes a RESTful API for all core operations. All endpoints are served under `/api/v1`.

## Authentication

Every request must include a valid token in the `Authorization` header:

```
Authorization: Bearer <your-token>
```

Tokens can be Personal Access Tokens (PATs) or session tokens obtained through OAuth.

---

## Recipes

### List Recipes

```http
GET /api/v1/recipes?page=1&limit=20
```

| Parameter | Type   | Default | Description              |
| --------- | ------ | ------- | ------------------------ |
| `page`    | number | 1       | Page number              |
| `limit`   | number | 20      | Items per page (max 100) |
| `search`  | string | –       | Full-text search query   |

**Response** `200 OK`

```json
{
  "data": [
    {
      "id": "rec_abc123",
      "title": "Pasta Carbonara",
      "servings": 4,
      "prepTime": 15,
      "cookTime": 20,
      "createdAt": "2026-01-15T10:30:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 142
  }
}
```

### Get Single Recipe

```http
GET /api/v1/recipes/:id
```

### Create Recipe

```http
POST /api/v1/recipes
Content-Type: application/json

{
  "title": "Pasta Carbonara",
  "servings": 4,
  "ingredients": [...],
  "steps": [...]
}
```

### Update Recipe

```http
PATCH /api/v1/recipes/:id
```

### Delete Recipe

```http
DELETE /api/v1/recipes/:id
```

---

## Finance

### List Transactions

```http
GET /api/v1/finance/transactions?from=2026-01-01&to=2026-03-01
```

### Create Transaction

```http
POST /api/v1/finance/transactions
Content-Type: application/json

{
  "amount": -42.50,
  "currency": "EUR",
  "category": "groceries",
  "description": "Weekly groceries",
  "date": "2026-03-10"
}
```

---

## Lists & Reminders

### Get All Lists

```http
GET /api/v1/lists
```

### Add Item to List

```http
POST /api/v1/lists/:listId/items
Content-Type: application/json

{
  "title": "Buy milk",
  "dueDate": "2026-03-18T09:00:00Z"
}
```

---

## Error Format

All errors follow a consistent structure:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Field 'title' is required.",
    "details": [
      { "field": "title", "rule": "required" }
    ]
  }
}
```

| HTTP Status | Code                | Meaning               |
| ----------- | ------------------- | --------------------- |
| 400         | `VALIDATION_ERROR`  | Invalid request body  |
| 401         | `UNAUTHORIZED`      | Missing or bad token  |
| 403         | `FORBIDDEN`         | Insufficient rights   |
| 404         | `NOT_FOUND`         | Resource not found    |
| 429         | `RATE_LIMITED`      | Too many requests     |
| 500         | `INTERNAL_ERROR`    | Unexpected server error |

## Rate Limiting

The API is rate-limited to **120 requests per minute** per token. Exceeding this returns `429 Too Many Requests` with a `Retry-After` header.
