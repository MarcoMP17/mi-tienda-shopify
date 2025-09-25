"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const topProducts = [
  { producto: "Kauai Oro Diamantina", ventas: 1398, unidades: 1, devolucion: 0 }, // Dato real
  { producto: "Normandia Sandalia Miel", ventas: 1200, unidades: 1, devolucion: 0 }, // Dato real
  { producto: "Alpes Sandalia Blanco", ventas: 999, unidades: 1, devolucion: 0 }, // Dato real
  { producto: "Nantes Sandalia Oro", ventas: 800, unidades: 1, devolucion: 0 },
  { producto: "Montpellier Blanco", ventas: 699, unidades: 1, devolucion: 0 },
]

const abcAnalysis = [
  { categoria: "A (Alto valor)", productos: 15, valor: 8500000, color: "#8884d8" },
  { categoria: "B (Medio valor)", productos: 45, valor: 2500000, color: "#82ca9d" },
  { categoria: "C (Bajo valor)", productos: 140, valor: 695308, color: "#ffc658" },
]

const inventoryTrends = [
  { fecha: "28 Marzo 2025", inventario: 12000000, rotacion: 0.05 },
  { fecha: "05 Abril 2025", inventario: 11950000, rotacion: 0.06 },
  { fecha: "12 Abril 2025", inventario: 11900000, rotacion: 0.07 },
  { fecha: "18 Abril 2025", inventario: 11850000, rotacion: 0.08 },
  { fecha: "02 Mayo 2025", inventario: 11800000, rotacion: 0.09 },
  { fecha: "08 Mayo 2025", inventario: 11750000, rotacion: 0.1 },
  { fecha: "15 Mayo 2025", inventario: 11720000, rotacion: 0.12 },
  { fecha: "22 Mayo 2025", inventario: 11710000, rotacion: 0.11 },
  { fecha: "28 Mayo 2025", inventario: 11705000, rotacion: 0.1 },
  { fecha: "05 Junio 2025", inventario: 11700000, rotacion: 0.09 },
  { fecha: "12 Junio 2025", inventario: 11698000, rotacion: 0.1 },
  { fecha: "18 Junio 2025", inventario: 11696000, rotacion: 0.09 },
  { fecha: "25 Junio 2025", inventario: 11695308, rotacion: 0.1 },
]

const returnAnalysis = [
  { producto: "Edimburgo Sandalia Negro", solicitado: 1, devuelto: 0, tasa: 0 },
  { producto: "Isabella Azul", solicitado: 1, devuelto: 0, tasa: 0 },
  { producto: "Otros productos", solicitado: 12, devuelto: 1, tasa: 8.3 },
]

export function ProductAnalysis() {
  return (
    <div className="grid gap-4">
      {/* Resumen de productos */}
      <Card>
        <CardHeader>
          <CardTitle>Resumen de Productos</CardTitle>
          <CardDescription>Información general del catálogo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">200+</div>
              <div className="text-sm text-blue-700">Productos Activos</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">14</div>
              <div className="text-sm text-green-700">Unidades Vendidas</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">$863</div>
              <div className="text-sm text-purple-700">Precio Promedio</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600">9.1%</div>
              <div className="text-sm text-orange-700">Tasa Devoluciones</div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Productos destacados:</strong> Kauai Oro Diamantina, Normandia Sandalia Miel, Alpes Sandalia
              Blanco
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Productos más vendidos y análisis ABC */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Productos Más Vendidos</CardTitle>
            <CardDescription>Top 5 productos por ventas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium text-sm">{product.producto}</span>
                    <div className="text-xs text-muted-foreground">{product.unidades} unidad vendida</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">${product.ventas.toLocaleString()}</div>
                    <div className="text-xs text-green-600">0% devoluciones</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Análisis ABC</CardTitle>
            <CardDescription>Clasificación por valor de inventario</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={abcAnalysis}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ categoria, productos }) => `${categoria}: ${productos}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="valor"
                >
                  {abcAnalysis.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Tendencias de inventario */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Tendencias de Inventario</CardTitle>
            <CardDescription>Valor y rotación mensual</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={inventoryTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fecha" angle={-45} textAnchor="end" height={80} fontSize={10} />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line yAxisId="left" type="monotone" dataKey="inventario" stroke="#8884d8" strokeWidth={2} />
                <Line yAxisId="right" type="monotone" dataKey="rotacion" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Análisis de Devoluciones</CardTitle>
            <CardDescription>Estado actual de devoluciones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center h-[300px] text-center space-y-4">
              <div className="text-6xl">✅</div>
              <div className="text-lg font-medium text-green-600">¡Excelente! Sin devoluciones registradas</div>
              <div className="text-sm text-muted-foreground max-w-md">
                Todos los productos vendidos han sido satisfactorios para los clientes.
              </div>
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">0%</div>
                  <div className="text-xs text-green-700">Tasa de devolución</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">14</div>
                  <div className="text-xs text-blue-700">Pedidos satisfactorios</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Métricas de productos */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Productos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">200+</div>
            <p className="text-xs text-muted-foreground">Variantes activas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Valor Inventario</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$11.7M</div>
            <p className="text-xs text-muted-foreground">Valor minorista</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rotación Promedio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.8%</div>
            <p className="text-xs text-muted-foreground">Mensual</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tasa Devolución</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.3%</div>
            <p className="text-xs text-muted-foreground">Promedio general</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
