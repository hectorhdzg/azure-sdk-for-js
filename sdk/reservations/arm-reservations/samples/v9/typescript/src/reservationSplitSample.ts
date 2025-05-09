/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SplitRequest, AzureReservationAPI } from "@azure/arm-reservations";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Split a `Reservation` into two `Reservation`s with specified quantity distribution.
 *
 * @summary Split a `Reservation` into two `Reservation`s with specified quantity distribution.
 * x-ms-original-file: specification/reservations/resource-manager/Microsoft.Capacity/stable/2022-11-01/examples/SplitReservation.json
 */
async function split(): Promise<void> {
  const reservationOrderId = "276e7ae4-84d0-4da6-ab4b-d6b94f3557da";
  const body: SplitRequest = {
    quantities: [1, 2],
    reservationId:
      "/providers/Microsoft.Capacity/reservationOrders/276e7ae4-84d0-4da6-ab4b-d6b94f3557da/reservations/bcae77cd-3119-4766-919f-b50d36c75c7a"
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureReservationAPI(credential);
  const result = await client.reservation.beginSplitAndWait(
    reservationOrderId,
    body
  );
  console.log(result);
}

async function main(): Promise<void> {
  split();
}

main().catch(console.error);
