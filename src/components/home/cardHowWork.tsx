type Props = {
    title: string;
    content: string;
}

import { Card, CardBody, CardHeader, Divider, Image } from '@nextui-org/react'
import React from 'react'

function CardHowWork(params: Props) {
  return (
<Card className="max-w-[400px]">
                  <CardHeader className="flex gap-3">
                      <Image
                          alt="mind tracer logo"
                          height={40}
                          radius="sm"
                          src='/images/steps.svg'
                          width={40} />
                      <div className="flex flex-col">
                          <p className="text-md">{ params.title }</p>
                      </div>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                  <p className="text-small text-default-500">{ params.content }</p>
                  </CardBody>
              </Card>  )
}

export default CardHowWork