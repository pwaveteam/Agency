'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('last:border-b-0', className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex w-full">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'group relative flex w-full items-center justify-between gap-4 border-b border-gray-200 py-6 text-left text-[16px] md:text-[18px] font-semibold text-[#333333] cursor-pointer outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50',
          'transition-colors duration-300 ease-out hover:text-primary focus:text-primary',
          className
        )}
        {...props}
      >
        <span className="flex-1 text-left transition-colors duration-300 ease-out group-hover:text-primary">
          {children}
        </span>
        <ChevronDownIcon
          className="text-[#333333] pointer-events-none shrink-0 transition-all duration-300 ease-out group-hover:text-primary group-data-[state=open]:rotate-180"
          style={{ width: 28, height: 28, strokeWidth: 1.2 }}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-[15px] md:text-[16px] text-black leading-[1.7]"
      {...props}
    >
      <div className={cn('pt-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }