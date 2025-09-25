"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// Actualizar datos de ventas con información real
const salesData = [
  { date: "28 Marzo 2025", ventas: 0, pedidos: 0 },
  { date: "05 Abril 2025", ventas: 1200, pedidos: 1 }, // Normandia Sandalia Miel
  { date: "12 Abril 2025", ventas: 800, pedidos: 1 }, // Nantes Sandalia Oro
  { date: "18 Abril 2025", ventas: 500, pedidos: 1 },
  { date: "02 Mayo 2025", ventas: 1500, pedidos: 2 },
  { date: "08 Mayo 2025", ventas: 999, pedidos: 1 }, // Alpes Sandalia Blanco
  { date: "15 Mayo 2025", ventas: 1398, pedidos: 1 }, // Kauai Oro Diamantina
  { date: "22 Mayo 2025", ventas: 1300, pedidos: 1 },
  { date: "28 Mayo 2025", ventas: 0, pedidos: 0 },
  { date: "05 Junio 2025", ventas: 800, pedidos: 1 },
  { date: "12 Junio 2025", ventas: 685, pedidos: 1 },
  { date: "18 Junio 2025", ventas: 0, pedidos: 0 },
  { date: "25 Junio 2025", ventas: 0, pedidos: 0 },
]

// Actualizar datos de conversión con datos reales
const conversionData = [
  { etapa: "Sesiones", valor: 72, porcentaje: 100 }, // Dato real de "Sesiones a lo largo del tiempo"
  { etapa: "Visitantes", valor: 64, porcentaje: 88.9 }, // Dato real de "Visitantes a lo largo del tiempo"
  { etapa: "Carrito", valor: 1, porcentaje: 1.4 }, // Dato real de "Tasa de conversión"
  { etapa: "Checkout", valor: 0, porcentaje: 0 }, // Dato real de "Tasa de conversión de pantallas de pago"
  { etapa: "Compra", valor: 14, porcentaje: 19.4 }, // Dato real de pedidos totales
]

// Actualizar productos con datos reales de los archivos
const productSales = [
  { producto: "Kauai Oro Diamantina", ventas: 1398, color: "#8884d8" }, // Dato real
  { producto: "Normandia Sandalia Miel", ventas: 1200, color: "#82ca9d" }, // Dato real
  { producto: "Alpes Sandalia Blanco", ventas: 999, color: "#ffc658" }, // Dato real
  { producto: "Nantes Sandalia Oro", ventas: 800, color: "#ff7300" }, // Dato real
  { producto: "Montpellier Blanco", ventas: 699, color: "#8dd1e1" }, // Dato real
]

export function SalesOverview() {
  return (
    <div className="grid gap-4">
      {/* Ventas a lo largo del tiempo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Ventas a lo largo del tiempo</CardTitle>
            <CardDescription>Evolución de ventas y pedidos</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" angle={-45} textAnchor="end" height={80} fontSize={10} />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="ventas" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="pedidos" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Embudo de Conversión</CardTitle>
            <CardDescription>Del tráfico a la compra</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {conversionData.map((etapa, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-20 text-sm font-medium">{etapa.etapa}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <div
                        className="bg-blue-500 h-6 rounded"
                        style={{ width: `${etapa.porcentaje}%`, minWidth: "20px" }}
                      />
                      <span className="text-sm font-medium">{etapa.valor}</span>
                      <span className="text-xs text-muted-foreground">({etapa.porcentaje}%)</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <p className="text-sm text-amber-700">
                  <strong>Oportunidad:</strong> De 228 sesiones, solo 14 completaron la compra. Hay potencial para
                  mejorar la conversión del carrito al checkout.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Análisis de productos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Ventas por Producto</CardTitle>
            <CardDescription>Distribución de ventas por producto</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={productSales}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ producto, porcentaje }) => `${producto}: ${porcentaje}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="ventas"
                >
                  {productSales.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Métricas Clave</CardTitle>
            <CardDescription>Indicadores principales</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Valor Promedio Pedido</span>
              <span className="font-medium">$863</span> {/* 12084/14 */}
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Tasa de Conversión</span>
              <span className="font-medium">19.4%</span> {/* 14 pedidos / 72 sesiones */}
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Tasa de Rebote</span>
              <span className="font-medium">37.5%</span> {/* Dato real */}
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Ventas Netas</span>
              <span className="font-medium">$11,985</span> {/* Dato real */}
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Inventario Total</span>
              <span className="font-medium">$11.7M</span> {/* Dato real */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
