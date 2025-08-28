import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'

const DashboardCpn = () => {

  // Data stok baju
  const stockData = [
    { name: 'Kaos', stock: 120 },
    { name: 'Kemeja', stock: 80 },
    { name: 'Jaket', stock: 45 },
    { name: 'Hoodie', stock: 60 },
    { name: 'Celana', stock: 95 },
  ]
  return (
    <div>
      {/* Grafik Stok Baju */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h4 className="text-gray-700 text-lg font-semibold mb-4">Stok Baju</h4>
        <div className="w-full h-80">
          <ResponsiveContainer>
            <BarChart data={stockData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="stock" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default DashboardCpn