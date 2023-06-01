'use client';

import { useEffect, useState } from 'react';
import UAParser from 'ua-parser-js';

const UserAgentInfo = () => {
  const [uaInfo, setUaInfo] = useState<UAParser.IResult | null>(null);
  const [bMobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    const parser = new UAParser();
    const userAgentInfo = parser.getResult();
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    const bMobile = regex.test(userAgentInfo.os.name!);
    setMobile(bMobile);
    setUaInfo(userAgentInfo);
  }, []);

  return (
    <div>
      {bMobile && uaInfo ? (
        <ul>
          <li>Browser: {uaInfo.browser.name}</li>
          <li>Operating System: {uaInfo.os.name}</li>
          <li>Device: {uaInfo.device.model}</li>
        </ul>
      ) : null}
    </div>
  );
};

export default UserAgentInfo;
