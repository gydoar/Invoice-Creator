import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@radix-ui/react-label"
import { Input } from "@/components/ui/input"

export default function TaxAndTotals() {
    return (
    <Card>
        <CardHeader>
            <CardTitle>Tax & Total</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <Label htmlFor="taxRate">Tax Rate (%)</Label>
                <Input id="taxRate" type="number" min="0" max="100" step="0.01"/>
            </div>
            <div className="space-y-2">
                <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>$100</span>
                </div>
                <div className="flex justify-between">
                    <span>Tax (10%):</span>
                    <span>$32</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Ttal:</span>
                    <span>$3211</span>
                </div>
            </div>
        </CardContent>
    </Card>
)}