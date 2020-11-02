import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Hello from 'src/views/Home/components/HelloWorld.vue';

describe('HelloWorld.vue', () =>
{
	describe(':props', () =>
	{
		it('shows the correct text', () =>
		{
			const wrapper = mount(Hello, {
				props: {
					msg: {
						message: 'Welcome to Your Vue.js',
						tsMessage: ' + TypeScript App!',
					}
				}
			})
			expect(wrapper.find('h1').text()).contains('Welcome to Your Vue.js + TypeScript App!');
		})
	})
})