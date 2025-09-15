import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function InvoiceItem() {
    return <div className="grid grid-cols-12 gap-4 p-4 border rounded-lg">
        <div className="col-span-5">
            <Label>Description</Label>
            <Input placeholder="Item description"/>
        </div>
        <div className="col-span-2">
             <Label>Quantity</Label>
            <Input type="number" min="1"/>
        </div>
        <div className="col-span-2">
            <Label>Rate ($)</Label>
            <Input type="number" min="1" step="0.01"/>
        </div>
        <div className="col-span-2">
            <Label>Amount</Label>
            <div className="h-10 px-3 py-2 bg-gray-50 border rounded-md flex items-center">
                $0.00
            </div>
        </div>
        <div className="col-span-1 flex items-end">
            <Button variant="outline" size="icon">
                <Trash2 className="w-4 h-4" />
            </Button>
        </div>
        
    </div>
}