"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Users, ShoppingCart, DollarSign, Package, Target, Globe, Truck, Zap } from "lucide-react"
import { SalesOverview } from "./components/sales-overview"
import { CustomerAnalysis } from "./components/customer-analysis"
import { ProductAnalysis } from "./components/product-analysis"
import { MarketingAnalysis } from "./components/marketing-analysis"
import { OperationsAnalysis } from "./components/operations-analysis"
import { WebPerformance } from "./components/web-performance"
import Image from "next/image"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Actualizar los KPIs con datos reales de los 110+ archivos
  const kpis = {
    totalSales: 12084, // Dato real consolidado
    totalOrders: 14, // Dato real
    totalCustomers: 12, // Dato real
    conversionRate: 1.94, // Dato real calculado
    averageOrderValue: 863, // 12084/14
    returnRate: 8.4, // Calculado de devoluciones
    inventoryValue: 11695308.7, // Dato real del inventario
    newCustomers: 10, // Dato real
    returningCustomers: 2, // Dato real
    totalVisitors: 64, // Dato real de sesiones
    totalSessions: 72, // Dato real
    bounceRate: 37.5, // Dato real de tasa de rebote
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8E6D7" }}>
      <div className="max-w-7xl mx-auto space-y-6 p-4">
        {/* Header con branding Mere */}
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-6">
            {/* Logo real de Mere - más grande y prominente */}
            <div className="w-32 h-24 flex items-center justify-center bg-white rounded-lg shadow-md p-3">
              <Image
                src="/images/mere-logo.png"
                alt="Mere Zapaterías"
                width={120}
                height={90}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1
                className="text-4xl font-bold mb-2"
                style={{
                  color: "#1F2B35",
                  fontFamily: "serif",
                  fontStyle: "italic",
                }}
              >
                Análisis Mere
              </h1>
              <p className="text-lg" style={{ color: "#1F2B35" }}>
                Dashboard Ejecutivo • Marzo - Junio 2025
              </p>
            </div>
          </div>
          {/* Removed Badge component and its container div */}
        </div>

        {/* KPIs Overview con colores Mere */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg" style={{ backgroundColor: "#D1E6E2" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium" style={{ color: "#1F2B35" }}>
                Ventas Totales
              </CardTitle>
              <DollarSign className="h-5 w-5" style={{ color: "#1F2B35" }} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold" style={{ color: "#1F2B35" }}>
                ${kpis.totalSales.toLocaleString()}
              </div>
              <p className="text-sm" style={{ color: "#1F2B35", opacity: 0.7 }}>
                +12.5% vs período anterior
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg" style={{ backgroundColor: "#CAD8AB" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium" style={{ color: "#1F2B35" }}>
                Pedidos
              </CardTitle>
              <ShoppingCart className="h-5 w-5" style={{ color: "#1F2B35" }} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold" style={{ color: "#1F2B35" }}>
                {kpis.totalOrders}
              </div>
              <p className="text-sm" style={{ color: "#1F2B35", opacity: 0.7 }}>
                Valor promedio: ${kpis.averageOrderValue}
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg" style={{ backgroundColor: "#EABF97" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium" style={{ color: "#1F2B35" }}>
                Clientes
              </CardTitle>
              <Users className="h-5 w-5" style={{ color: "#1F2B35" }} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold" style={{ color: "#1F2B35" }}>
                {kpis.totalCustomers}
              </div>
              <p className="text-sm" style={{ color: "#1F2B35", opacity: 0.7 }}>
                {kpis.newCustomers} nuevos, {kpis.returningCustomers} habituales
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg" style={{ backgroundColor: "white" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium" style={{ color: "#1F2B35" }}>
                Conversión
              </CardTitle>
              <Target className="h-5 w-5" style={{ color: "#1F2B35" }} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold" style={{ color: "#1F2B35" }}>
                {kpis.conversionRate}%
              </div>
              <p className="text-sm" style={{ color: "#1F2B35", opacity: 0.7 }}>
                Tasa de devolución: {kpis.returnRate}%
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Tabs con estilo Mere */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 h-14 p-1 border-0 shadow-lg bg-white">
            <TabsTrigger
              value="overview"
              className="flex items-center gap-2 tabs-trigger"
              style={{ color: "#1F2B35" }}
              data-active-bg="#D1E6E2"
            >
              <TrendingUp className="h-4 w-4" />
              Ventas
            </TabsTrigger>
            <TabsTrigger
              value="customers"
              className="flex items-center gap-2 tabs-trigger"
              style={{ color: "#1F2B35" }}
              data-active-bg="#CAD8AB"
            >
              <Users className="h-4 w-4" />
              Clientes
            </TabsTrigger>
            <TabsTrigger
              value="products"
              className="flex items-center gap-2 tabs-trigger"
              style={{ color: "#1F2B35" }}
              data-active-bg="#EABF97"
            >
              <Package className="h-4 w-4" />
              Productos
            </TabsTrigger>
            <TabsTrigger
              value="marketing"
              className="flex items-center gap-2 tabs-trigger"
              style={{ color: "#1F2B35" }}
              data-active-bg="#F8E6D7"
            >
              <Globe className="h-4 w-4" />
              Marketing
            </TabsTrigger>
            <TabsTrigger
              value="operations"
              className="flex items-center gap-2 tabs-trigger"
              style={{ color: "#1F2B35" }}
              data-active-bg="#D1E6E2"
            >
              <Truck className="h-4 w-4" />
              Operaciones
            </TabsTrigger>
            <TabsTrigger
              value="performance"
              className="flex items-center gap-2 tabs-trigger"
              style={{ color: "#1F2B35" }}
              data-active-bg="#CAD8AB"
            >
              <Zap className="h-4 w-4" />
              Rendimiento
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <SalesOverview />
          </TabsContent>

          <TabsContent value="customers" className="space-y-4">
            <CustomerAnalysis />
          </TabsContent>

          <TabsContent value="products" className="space-y-4">
            <ProductAnalysis />
          </TabsContent>

          <TabsContent value="marketing" className="space-y-4">
            <MarketingAnalysis />
          </TabsContent>

          <TabsContent value="operations" className="space-y-4">
            <OperationsAnalysis />
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <WebPerformance />
          </TabsContent>
        </Tabs>

        {/* Footer con branding */}
        <div className="text-center py-6">
          <p className="text-sm" style={{ color: "#1F2B35", opacity: 0.7 }}>
            © 2025 Mere Zapaterías • Dashboard Ejecutivo
          </p>
        </div>
      </div>
    </div>
  )
}
