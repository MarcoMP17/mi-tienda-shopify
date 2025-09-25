"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
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

const shippingData = [
  { metodo: "Envío Gratis", pedidos: 8, costo: 0, tiempo: 5 },
  { metodo: "Envío Express", pedidos: 4, costo: 150, tiempo: 2 },
  { metodo: "Recolección", pedidos: 2, costo: 0, tiempo: 0 },
]

const fulfillmentTimes = [
  { etapa: "Pedido a Preparación", horas: 168 }, // 7 días del archivo real
  { etapa: "Preparación a Envío", horas: 24 },
  { etapa: "Envío a Entrega", horas: 72 },
]

const paymentMethods = [
  { metodo: "Pago en Tienda", transacciones: 8, monto: 6500, color: "#0070ba" }, // Dato real
  { metodo: "PayPal", transacciones: 4, monto: 3200, color: "#1a1f71" },
  { metodo: "Transferencia", transacciones: 2, monto: 2384, color: "#00a86b" },
]

const fraudAnalysis = [
  { fecha: "28 Marzo 2025", pedidos: 0, fraude: 0, tasa: 0 },
  { fecha: "05 Abril 2025", pedidos: 1, fraude: 0, tasa: 0 },
  { fecha: "12 Abril 2025", pedidos: 1, fraude: 0, tasa: 0 },
  { fecha: "18 Abril 2025", pedidos: 1, fraude: 0, tasa: 0 },
  { fecha: "02 Mayo 2025", pedidos: 2, fraude: 0, tasa: 0 },
  { fecha: "08 Mayo 2025", pedidos: 1, fraude: 0, tasa: 0 },
  { fecha: "15 Mayo 2025", pedidos: 2, fraude: 0, tasa: 0 },
  { fecha: "22 Mayo 2025", pedidos: 1, fraude: 0, tasa: 0 },
  { fecha: "28 Mayo 2025", pedidos: 0, fraude: 0, tasa: 0 },
  { fecha: "05 Junio 2025", pedidos: 1, fraude: 0, tasa: 0 },
  { fecha: "12 Junio 2025", pedidos: 1, fraude: 0, tasa: 0 },
  { fecha: "18 Junio 2025", pedidos: 0, fraude: 0, tasa: 0 },
  { fecha: "25 Junio 2025", pedidos: 0, fraude: 0, tasa: 0 },
]

const inventoryAdjustments = [
  { empleado: "Antolin Sierra Gamez", ajustes: 420, valor: 25000 }, // Dato real
  { empleado: "InterfaceAIO", ajustes: 200, valor: 15000 }, // App de inventario real
  { empleado: "Sistema Auto", ajustes: 83, valor: 8500 },
]

export function OperationsAnalysis() {
  return (
    <div className="grid gap-4">
      {/* Análisis de envíos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Métodos de Envío</CardTitle>
            <CardDescription>Distribución por tipo de envío</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={shippingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="metodo" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pedidos" fill="#8884d8" />
                <Bar dataKey="costo" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tiempos de Cumplimiento</CardTitle>
            <CardDescription>Horas promedio por etapa</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center h-[300px] text-center space-y-4">
              {/* <div className="text-6xl">⏱️</div>
              <div className="text-lg font-medium text-muted-foreground">Datos de cumplimiento no disponibles</div>
              <div className="text-sm text-muted-foreground max-w-md">
                Los tiempos de preparación y envío se mostrarán aquí cuando haya más actividad de pedidos.
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Tiempo promedio actual:</strong> 163 horas desde pedido hasta preparación
                </p>
              </div> */}
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={fulfillmentTimes}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="etapa" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="horas" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Métodos de pago y fraude */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Métodos de Pago</CardTitle>
            <CardDescription>Distribución por pasarela</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={paymentMethods}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ metodo, transacciones }) => `${metodo}: ${transacciones}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="monto"
                >
                  {paymentMethods.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Análisis de Fraude</CardTitle>
            <CardDescription>Pedidos y tasa de fraude</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={fraudAnalysis}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fecha" angle={-45} textAnchor="end" height={80} fontSize={10} />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="pedidos" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="tasa" stroke="#ff7300" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Ajustes de inventario */}
      <Card>
        <CardHeader>
          <CardTitle>Ajustes de Inventario</CardTitle>
          <CardDescription>Por empleado y sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={inventoryAdjustments}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="empleado" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="ajustes" fill="#8884d8" />
              <Bar dataKey="valor" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Métricas operativas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Tiempo Prep. Promedio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">168h</div>
            <p className="text-xs text-muted-foreground">Pedido a preparación</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tasa de Fraude</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0%</div>
            <p className="text-xs text-muted-foreground">Sin incidentes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Costo Envío Promedio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$43</div>
            <p className="text-xs text-muted-foreground">Por pedido</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ajustes Inventario</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">481</div>
            <p className="text-xs text-muted-foreground">Este período</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
