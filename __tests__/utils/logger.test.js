import logger from '../../src/utils/logger';

const spyLog = jest.spyOn(console, 'log').mockImplementation();
const spyError = jest.spyOn(console, 'error').mockImplementation();


describe('Logged', () => {
  
  beforeEach(() => {
    jest.clearAllMocks()
  })
  afterAll(() => {
    jest.restoreAllMocks();
  
  }) 
  
  it('Function logging: log', () => {
    //call func normal log
    logger.log('log');
  
    expect(spyLog).toHaveBeenCalledTimes(1)
  })
  
  it('Function logging: success', () => {
    //call func normal log
    logger.success('teste');
  
    expect(spyLog).toHaveBeenCalledTimes(1)
  })
  
  it('Function logging: error', () => {
    //call func normal log
    logger.error('teste');
  
    expect(spyError).toHaveBeenCalledTimes(1)
  })
});

