import BasicDetails from "@/components/basic-details"
import ContactDetails from "@/components/contact-details"
import ItemsList from "@/components/items-list"
import TaxAndTotals from "@/components/tax-and-totals"

export default function InvoiceForm () {
    return <div className="space-y-6">
        <BasicDetails/>
        <ContactDetails/>
        <ItemsList/>
        <TaxAndTotals/>
    </div>
}