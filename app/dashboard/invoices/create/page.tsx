import { Metadata } from "next";
import Form from "@/app/ui/invoices/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";

export const  metadata : Metadata ={
  title: 'Ireate Invoice'
}

export default async function page() {
    const customers = await fetchCustomers();
  return (
    <main>
        <Breadcrumbs breadcrumbs={[{
            label: 'Invoice', href: '/dashboard/invoices'
        }, {
            label: 'Create Invoice', href: 'dashboard/invoices/create',
            active: true,
        }]}/>    
        <Form customers={customers} />  
    </main>
  )
}
