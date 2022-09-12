import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Header from '../Header.vue';

describe('Header', () => {
  it('renders properly', () => {
    const wrapper = mount(Header, {
      props: {
        title: 'Test Header'
      },
      global: {
        mocks: {
          $router: {
            currentRoute: {
              value: {
                name: 'weather'
              }
            }
          }
        }
      }
    });
    expect(wrapper.text()).toContain('Test Header');
  });
});
