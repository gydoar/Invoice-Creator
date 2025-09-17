import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useInvoice } from "@/context/invoice-context";

export default function ContactDetails() {
  const { invoice, updateInvoice } = useInvoice ();
  console.log(invoice)
  return (
    <Card>
      <CardHeader>
        <CardTitle>Form & To</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
       <div className="space-y-4">
        <h3 className="font-medium">From (Your Details)</h3>
        <div>
            <Label htmlFor="fromName">Name</Label>
            <Input 
            id="fromName" 
            value={invoice.fromName}
            onChange={(e) => updateInvoice({ fromName: e.target.value})}
            placeholder="Your name or company"/>
        </div>
        <div>
            <Label htmlFor="fromEmail">Email</Label>
            <Input 
            id="fromEmail" 
            value={invoice.fromEmail}
            onChange={(e) => updateInvoice({ fromEmail: e.target.value})}
            placeholder="your@email.com" type="email"/>
        </div>
       </div>
       <div className="space-y-4">
        <h3 className="font-medium">To (Client Details)</h3>
        <div>
            <Label htmlFor="toName">Name</Label>
            <Input 
            id="toName" 
            value={invoice.toName}
            onChange={(e) => updateInvoice({ toName: e.target.value})}
            placeholder="Client name or company"/>
        </div>
         <div>
            <Label htmlFor="toEmail">Email</Label>
            <Input 
            id="toEmail" 
            value={invoice.toEmail}
            onChange={(e) => updateInvoice({ toEmail: e.target.value})}
            placeholder="client@email.com" type="email"/>
        </div>
       </div>
      </CardContent>
    </Card>
  );
}
