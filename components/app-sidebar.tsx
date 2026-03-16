"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LifeBuoyIcon, SendIcon, FrameIcon, PieChartIcon, MapIcon, TerminalIcon, TrendingUpIcon, BarChart3 } from "lucide-react"

type NavMainItem = {
  title: string
  url?: string
  icon?: React.ReactNode
  items?: { title: string; url: string }[]
}

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      title: "Products",
      items: [
        { title: "Product List", url: "/products/list" },
        { title: "Add Product", url: "/products/create" },
      ],
    },
    {
      title: "Orders",
      items: [
        { title: "Order List", url: "/orders/list" },
      ],
    },
    {
      title: "Customers",
      url: "/customers",
    },
    {
      title: "Sales",
      url: "/sales",
      icon: <TrendingUpIcon />,
    },
    {
      title: "Website Analytics",
      url: "/website-analytics",
      icon: <BarChart3 />,
    },
    {
      title: "Analytics",
      url: "/analytics",
    },
    {
      title: "Settings",
      url: "/settings",
    },
  ] as NavMainItem[],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: (
        <LifeBuoyIcon />
      ),
    },
    {
      title: "Feedback",
      url: "#",
      icon: (
        <SendIcon />
      ),
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: (
        <FrameIcon />
      ),
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: (
        <PieChartIcon />
      ),
    },
    {
      name: "Travel",
      url: "#",
      icon: (
        <MapIcon />
      ),
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <TerminalIcon className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
