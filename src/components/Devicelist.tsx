

import Link from "next/link";
import { useState } from "react";

const DeviceList = () => {
  // Define the device data directly in the component's state

  interface Device {
    name: string;
    id: string;
    status: "on" | "off";
    version: String;
  }


  const [devices, setDevices] = useState<Device[]>([
    {
      name: "Smart Light",
      id: "12345-abcde-67890",
      status: "on",
      version: "v1.2.0",
    },
    {
      name: "Smart Thermostat",
      id: "23456-bcdef-78901",
      status: "off",
      version: "v2.0.1",
    },
    {
      name: "Smart Door Lock",
      id: "34567-cdefg-89012",
      status: "on",
      version: "v1.5.3",
    },
    {
      name: "Smart Camera",
      id: "45678-defgh-90123",
      status: "off",
      version: "v3.1.0",
    },
    {
      name: "Smart Refrigerator",
      id: "56789-efghi-01234",
      status: "on",
      version: "v4.0.0",
    },
    {
      name: "Smart Speaker",
      id: "67890-fghij-12345",
      status: "off",
      version: "v2.3.1",
    },
  ]);



  return (
    <div className="device-list">
   {devices.map((device) => (
          <li key={device.id} className="list-none">
            <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              {/* Button to toggle device status */}
              <button
                className={`w-4 h-4 mr-3 rounded-full ${device.status === "on" ? "bg-green-500" : "bg-gray-300"}`}
                aria-label={`${device.status === "on" ? "Turn off" : "Turn on"} ${device.name}`}
              ></button>
              
              {/* Device Name */}
              <span className="flex-1 ms-3 whitespace-nowrap">{device.name}</span>
            </Link>
          </li>
        ))}
    </div>
  );
};

export default DeviceList;
