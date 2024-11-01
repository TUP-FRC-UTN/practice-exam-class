# Sistema de Gestión de Pedidos de Productos Tecnológicos

## Objetivo

Desarrollar una aplicación web en Angular 18 para gestionar pedidos de una tienda de productos tecnológicos, implementando routing, reactive forms con validaciones, y comunicación con API.

## Requerimientos Técnicos

1. Angular CLI 18.x
2. Bootstrap 5.x
3. JSON Server (proporcionado)

## Estructura del Proyecto

### 1. Routing

- Implementar dos rutas principales:
  - `/create-order`: Formulario de creación de pedidos
  - `/orders`: Lista de pedidos realizados
- Implementar navegación entre ambas pantallas
- Configurar una ruta por defecto que redirija a `/create-order`

### 2. Formulario Reactivo

#### 2.1 Estructura Base

- Crear un FormGroup con:
  - Datos del cliente:
    - Nombre (requerido, mínimo 3 caracteres)
    - Email (requerido, validación de formato email)
  - FormArray de productos:
    - Nombre del producto (select desde la API)
    - Cantidad (número, mayor a 0, no exceder stock)
    - Precio (calculado automáticamente según producto)
    - Stock (calculado automáticamente según producto)
- Implementar validación:
  - El pedido debe tener al menos un producto
  - La cantidad total de productos no debe exceder 10 unidades
- Mostrar mensajes de error apropiados

#### 2.2 Validación Sincrónica Personalizada

- Implementar un validador sincrónico personalizado para el FormArray de productos que:
  - Valide que no existan productos duplicados en el pedido
  - Debe implementarse usando la siguiente estructura:

1. La validación debe:
   - Activarse cada vez que se agrega o modifica un producto en el FormArray
   - Retornar el mensaje si hay productos repetidos

#### 2.3 Validación Asincrónica del Email

- Implementar un validador asincrónico personalizado para el campo email que:
  - Utilice el endpoint GET /orders?email={email} para verificar el historial de pedidos
  - Valide que el cliente no haya realizado más de 3 pedidos en las últimas 24 horas

##### Requerimientos de la validación:

1. La validación debe:
   - Activarse cuando el usuario modifica el campo email
   - Retornar el error si se excede el límite
   - Manejar correctamente los casos de error de la API
   - Ignorar la validación si el campo está vacío

### 3. Integración con API

- Consumir endpoints:
  - GET /products: Obtener lista de productos disponibles
  - GET /orders: Obtener pedidos existentes
  - GET /orders?email: Obtener los pedidos de un email
  - POST /orders: Crear nuevo pedido
- Implementar interfaces TypeScript para los modelos
- Manejar estados de carga y errores

### 4. Listado de Pedidos con Filtro

- Implementar una tabla responsive con Bootstrap que muestre:
  - Código de orden
  - Nombre del cliente
  - Email
  - Cantidad de productos
  - Fecha de compra
  - Total del pedido
- Funcionalidades requeridas:
  - Buscador que filtre por nombre de cliente o email

### 5. Algoritmo de Procesamiento

- Implementar:
  - Calcule el total del pedido aplicando un descuento del 10% si el total supera $1000
  - Valide que hay stock suficiente para cada producto
  - Genere un código único para el pedido basado en: primera letra del nombre del cliente + últimos 4 caracteres del email + timestamp
  - Por cada producto nuevo debe agregar una fecha de compra al producto
  - Debe validar que en la lista de productos el usuario no seleccione dos productos iguales
  - Debe validar que el usuario no pueda realizar más de tres pedidos en las últimas 24 horas utilizando el endpoint de filtrado por email

## Configuración del Proyecto

### Instalación

```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Instalar dependencias
cd [NOMBRE_PROYECTO]
npm install

# Instalar JSON Server globalmente
npm install -g json-server
```

### Ejecución

```bash
# Terminal 1: Iniciar el servidor de desarrollo de Angular
ng serve

# Terminal 2: Iniciar JSON Server
json-server --watch db.json
```

### Estructura de datos del servidor mock (db.json)

```json
{
  "products": [
    {
      "id": 1,
      "name": "Laptop",
      "price": 999.99,
      "stock": 10
    }
  ],
  "orders": [
    {
      "id": "0f2c",
      "customerName": "Luis Gigena",
      "email": "luisG@gmail.com",
      "products": [
        {
          "productId": "1",
          "quantity": 1,
          "stock": 50,
          "price": 999.99
        },
        {
          "productId": "2",
          "quantity": 1,
          "stock": 100,
          "price": 699.99
        }
      ],
      "total": 1529.982,
      "orderCode": "L.com222249",
      "timestamp": "2024-10-28T14:53:42.249Z"
    }
  ]
}
```

## Notas Importantes

- Se proporciona un servidor mock con datos iniciales
- Se puede consultar documentación oficial de Angular y Bootstrap
- No se permite el uso de librerías adicionales sin consulta previa
- La validación asincrónica debe implementarse utilizando las mejores prácticas de RxJS
- El filtrado de la tabla debe realizarse en el componente, no en el servidor


