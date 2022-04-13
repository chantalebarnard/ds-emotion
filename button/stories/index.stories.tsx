import React from 'react';
import { Button } from '../src/Button';

export const primary = () => <Button primary>Press me</Button>;

export const secondary = () => <Button secondary>Press me</Button>;

export const disabled = () => <Button disabled>Press me</Button>;

export const secondary_disabled = () => (
  <Button secondary disabled>
    Press me
  </Button>
);

export const primary_loading = () => (
  <Button primary loading>
    Press me
  </Button>
);

export const secondary_loading = () => (
  <Button secondary loading>
    Press me
  </Button>
);
