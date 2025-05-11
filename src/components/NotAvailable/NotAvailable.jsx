import React from "react";

function NotAvailable({message, icon}) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 rounded-lg border border-dashed border-borderColor bg-muted/30">
      <div className="bg-muted p-4 rounded-full mb-4 shadow-sm">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-muted-foreground">{message}</h3>
    </div>
  );
}

export default NotAvailable;
