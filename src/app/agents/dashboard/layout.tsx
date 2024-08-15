import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <div className="flex">
    //   <div className="border-r-2 h-screen">navbar</div>
    //   {children}
    // </div>
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        defaultSize={13}
        className="h-screen w-[20vw] flex flex-col items-start ml-6 pt-[30vh]"
      >
        <a className="w-fit text-lg mb-[1rem]" href="">
          Dashboard
        </a>
        <a className="w-fit text-lg" href="">
          Settings
        </a>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="flex justify-center">
        {children}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
