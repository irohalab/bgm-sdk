# bgm-sdk-inversify

A typescript sdk for bgm.tv API. for API reference, see: [https://bangumi.github.io/api/](https://bangumi.github.io/api/)

To use this SDK, you need to use with RxJS 6+ and Inversify.

## Install

```shell
npm install @irohalab/bgm-sdk-inversify --save
```

Optionally, install dependencies
```shell
npm install inversify reflect-metadata rxjs typescript --save,
```

## Usage

```typescript
import { DefaultService, DefaultServiceInterface, ApiServiceBinder } from '@irohalab/bgm-sdk-inversify';
import { injectable } from 'inversify';
import { Subject } from './subject';
import { lastValueFrom } from 'rxjs';

const TYPES = {
    DefaultService: 'DefaultService'
}

@injectable()
export class YourInjectableService {
    constructor(@inject(TYPES.DefaultService) private _bgmClient: DefaultService) {
    }

    async getSubject(bgmId: number): Promise<Subject> {
        return await lastValueFrom(this._bgmClient.getSujectById(bgmId));
    }
}

const container = new Container();
ApiServiceBinder.with(container);
container.bind<YourInjectableService>(YourInjectableService).to(ApiServiceBinder);
const yourService = container.get<YourInjectableService>(YourInjectableService);
const subject = await yourService.getSubject(324295);
```

